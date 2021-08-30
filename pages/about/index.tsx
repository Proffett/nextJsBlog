import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";
interface AboutProps {
    title: string
}

export default function About({title}: AboutProps) {

    const buttonHandler = () => {
        Router.push('/')
    }
    return(
        <MainLayout title={'About page'}>
            <h1>{title}</h1>
            <button onClick={buttonHandler} >Go back</button>
            <button onClick={()=> Router.push('/') } >Go back</button>
        </MainLayout>

    )
}


About.getInitialProps = async (): Promise<AboutProps> => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const data = await response.json()
    return {title: data.title}
}