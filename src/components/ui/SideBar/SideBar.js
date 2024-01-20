import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import topnews from "@/assets/images.jpeg"

const SideBar = () => {
    return (
        <Box className="mt-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topnews} width={800} alt="top-news" />
                    </CardMedia>
                    <CardContent>
                        <p className="w-[100px] bg-red-700 py-2 rounded-lg text-center">Technology</p>
                        <Typography gutterBottom variant="h5" marginTop={3} component="div">
                            Unprecedented Scientific Discovery Reveals Potential Breakthrough in Clean Energy Technology
                        </Typography>
                        <Typography gutterBottom>
                            Unprecedented Scientific
                        </Typography>
                        <Typography variant="body2" marginTop={3} color="text.secondary">
                            In a groundbreaking development that could revolutionize the landscape of clean energy, scientists have unveiled a potential breakthrough that promises to reshape the way we power our world. The discovery,
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default SideBar;