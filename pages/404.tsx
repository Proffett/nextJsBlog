import Link from 'next/link'
import {MainLayout} from "../components/MainLayout";
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    return(
        <MainLayout>
            <h1 className={classes.error}>404 - Page is not found</h1>
            <Link href={'/'}>Go back</Link>
        </MainLayout>

    )
}