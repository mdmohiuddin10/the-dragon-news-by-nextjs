import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from '@/assets/header.png'
import { showCurrentDateAndMonth } from "@/utils/getCurrentDate";



const Header = () => {
    const currentDate =   showCurrentDateAndMonth();
    return (
      <Box className="w-full">
        <Container>
            <Image className="mx-auto" src={headingImage} alt="logo" width={500} height={500}></Image>
            <Typography className="mt-3 mb-5 text-xl" variant="body2" textAlign={"center"} color={"gray"}>
                Journalism without Fear or Favor
            </Typography>
            <Typography className="mt-3 mb-5 text-xl" variant="body2" textAlign={"center"} color={"gray"}>
               {currentDate}
            </Typography>
        </Container>
      </Box>
    );
};

export default Header;