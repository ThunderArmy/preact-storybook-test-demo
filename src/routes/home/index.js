import style from './style.css';

const Home = () => (
    <div class={style.home}>
        <h1>Test Repo</h1>
        <div class={style.imageContainer}>
            <img alt="empty logo" class={style.logo} src="../../assets/icons/android-chrome-192x192.png" />
        </div>
    </div>
);

export default Home;

