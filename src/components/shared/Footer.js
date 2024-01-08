import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/base";


const Footer = () => {
    const navItems = [
        {
            route: "Home",
            pathname: '/'
        },
        {
            route: "Pages",
            pathname: '/pages'
        },
        {
            route: "Category",
            pathname: '/category'
        },
        {
            route: "News",
            pathname: '/news'
        },
        {
            route: "Contact",
            pathname: '/contact'
        }
    ];



    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" sx={{
                    "& svg": {
                        color: "white",
                    },
                }}>
                    <IconButton>
                        <Link href={'https://web.facebook.com/hmmahi.uddin.5/'}>
                            <FacebookIcon></FacebookIcon>
                        </Link>
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                </Box>
                <Box className="w-full text-center space-x-8 mt-3">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'>{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography className="text-white text-center mt-3">@copiright: 2024 the Dragon News</Typography>
            </Container>
        </Box>
    );
};

export default Footer;