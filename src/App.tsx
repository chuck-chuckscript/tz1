
import './App.scss'
import {BitCoinBackground} from "./components/BitCoinBackground/BitCoinBackground.tsx";
import {Button} from "./components/UI/Button/Button.tsx";
import {BsApple, BsGooglePlay} from "react-icons/bs";
import {CommentList} from "./components/Comment/CommentList.tsx";
import {CommentProps} from "./components/Comment/Comment.tsx";
import {Intro} from "./components/Intro/Intro.tsx";

const Comments : CommentProps[] = [
    {
        id: 1,
        image: '/comment4.png',
        authorName: 'LORENZO',
        tagName: '@lorenzoo',
        text: 'Amazing Telegram bot! Provides real-time crypto prices and news'
    },
    {
        id: 2,
        image: '/comment3.png',
        authorName: 'ADALINA',
        tagName: '@ado',
        text: 'Must-have bot for crypto traders. Accurate signals and analysis'
    },
    {
        id: 3,
        image: '/comment2.png',
        authorName: 'ALEXANDER',
        tagName: '@alex_x',
        text: 'Superb cryptocurrency bot! Quick updates and reliable data'
    },
    {
        id: 4,
        image: '/comment1.png',
        authorName: 'RUSHANA',
        tagName: '@Hana',
        text: 'Efficient and user-friendly bot. Simplifies crypto trading tasks'
    }
]


function App() {


  return (
    <div className={'pageWrapper'}>

        <BitCoinBackground/>
        <main>
            <Intro/>
            <Button className={'join'} variant={'gradient'}>JOIN WHATSAPP</Button>
            <CommentList list={Comments}/>
        </main>

        <footer>
            <a className={'download'}>
                <BsGooglePlay/>
                <span>Get it on<br/><b>Google play</b></span>
            </a>
            <a className={'download'}>
                <BsApple/>
                <span>Available on the<br/><b>App Store</b></span>
            </a>
        </footer>
    </div>
  )
}

export default App
