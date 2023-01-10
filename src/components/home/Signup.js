
import { Box, Container, Grid, TextField, Typography, alpha, } from "@mui/material";
import { useSelector } from "react-redux";
import * as Yup from 'yup';
import { FormikProvider, useFormik, Form } from "formik";
import { toast } from "react-toastify";
import { ApplyGameButton, MilestonesTitle, SignUpGrid, TitleBox, TypographyShadow } from "./HomeStyles";
import useResponsive from "../../hooks/useResponsive";
import { Color } from "../../constant/styled";
import { post } from "../../utils/api";
import { GeneralPoint } from "../../store/setting/settingConstants";
import { useState } from "react";

export default function Signup() {
  const isDesktop = useResponsive("up", "md");
  const isMobile = useResponsive("down", "sm");
  const { setting } = useSelector((state) => state);
  const { library } = setting;


  const [isSubmitting, setIsSubmitting] = useState(false);
  const defaultValues = {
    studioName: "",
    website: "",
    email: "",
    description: ""
  };

  const ApplySchema = Yup.object().shape({
    studioName: Yup.string().required('Studio Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    description: Yup.string().required('Description is required'),
  });

  const _handleApply = (params) => {
    let submitParams = {
      studioName: params.studioName,
      website: params.website ? params.website : '',
      email: params.email,
      description: params.description,
    };
    post(
      GeneralPoint.ApplyForm,
      submitParams,
      () => {
        toast.success('Successful Apply');
        setIsSubmitting(false);
        formik.setValues({
          studioName: "",
          website: "",
          email: "",
          description: ""
        })
        setTimeout(() => {
          formik.setErrors({
            studioName: "",
            website: "",
            email: "",
            description: ""
          })
        }, 3);
      },
      (error) => {
        toast.error(error)
        setIsSubmitting(false);
      }
    );
  };
  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: ApplySchema,
    onSubmit: () => {
      setIsSubmitting(true);
      _handleApply(formik.values);
    },
  });


  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Box pt={isDesktop ? 5 : 2} pb={isDesktop ? 10 : 5}
      sx={{
        background: "url('/images/background/bg-7.jpg')",
        backgroundSize: "100% 100%",
      }}>
      <Container>
        <TitleBox>
          <TypographyShadow variant='h3'>
            Sign Up for Project
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-1.png" />
          <Typography variant="p" sx={{
            textAlign: 'center',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '25%',
            paddingRight: '25%',
            color: Color.text,
          }}>
            Keep up with the latest project deployments and network updates!
          </Typography>
        </TitleBox>
        <SignUpGrid container>
          <Grid item xs={12} sm={12} md={6}
            sx={{
              backgroundImage: (!isDesktop && !isMobile) && 'url(/images/home/signup.jpg)',
              backgroundSize: (!isDesktop && !isMobile) && 'cover',
              backgroundPosition: (!isDesktop && !isMobile) && 'center',
              borderRadius: (!isDesktop && !isMobile) && '0 0 20px 20px',
              backgroundColor: (!isDesktop && !isMobile) && alpha('#000', 0.5),
              backgroundBlendMode: (!isDesktop && !isMobile) && 'color'
            }}>
            <MilestonesTitle sx={{ color: '#01E8C6', display: 'block', textAlign: 'center' }}>
              Apply for Gamefund
            </MilestonesTitle>
            <FormikProvider value={formik}>
              <Form onSubmit={handleSubmit}>
                <Box
                  autoComplete="off"
                  sx={{
                    mt: 1,
                    '& .MuiTextField-root': {
                      mt: 1.5,
                      mb: 1,
                    },
                    '& .MuiInputBase-root': {
                      borderRadius: '0',
                      color: alpha('#fff', 0.7),
                      '& fieldset': {
                        borderColor: alpha('#00FFFB', 0.15),
                      },
                    },
                  }}>
                  <TextField
                    label="Studio's name"
                    variant="outlined"
                    fullWidth
                    {...getFieldProps('studioName')}
                    error={Boolean(touched.studioName && errors.studioName)}
                    helperText={touched.studioName && errors.studioName}
                  />
                  <TextField
                    label="Website"
                    variant="outlined"
                    fullWidth
                    {...getFieldProps('website')}
                    error={Boolean(touched.website && errors.website)}
                    helperText={touched.website && errors.website}
                  />
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    type={'email'}
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Game Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3.5}
                    {...getFieldProps('description')}
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                  />
                  <Box display={'flex'} justifyContent='center' mt={3}>
                    <ApplyGameButton type="submit" loading={isSubmitting}>
                      SUBMIT
                    </ApplyGameButton>
                  </Box>
                </Box>
              </Form>
            </FormikProvider>
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            {(isDesktop || isMobile) && <img alt="" src="/images/home/signup.jpg" width={'100%'} height={'100%'} />}
          </Grid>
        </SignUpGrid>

      </Container>
    </Box>
  );
}
