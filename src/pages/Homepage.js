import Page from '../components/common/Page';
import { Ecosystem, GrowGame, Milestones, MiniGames, Networks, Partner, Signup, TitleMain } from '../components/home';

export default function Homepage() {
    return (
        <Page title="Home">
            <TitleMain />
            <Networks />
            <GrowGame />
            <Milestones />
            <Partner />
            <Ecosystem />
            <MiniGames />
            <Signup />
        </Page>
    );
}
