"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Stack, Typography } from '@mui/material';
import Link from 'next/link';


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


function Nabvar() {

    return (
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <Image src='https://i.postimg.cc/9z5J1sB6/download-3.png' width={100} height={100} alt='logo' /> */}
                    <Typography fontSize={20} fontWeight={600}>The Dragon News</Typography>
                    <Box className="w-full">
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className='text-white'>{item.route}</Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack direction="row" sx={{
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
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Nabvar;