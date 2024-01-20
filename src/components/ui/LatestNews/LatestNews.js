import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topnews from "@/assets/images.jpeg"
import mainnews from "@/assets/download.jpeg"
import mainnews2 from "@/assets/russ.jpeg"
import Image from "next/image";


const LatestNews = () => {
    return (
        <>
            <Box className="my-5">
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
                <Grid className="mt-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={mainnews} width={800} alt="top-news" />
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={mainnews2} width={800} alt="top-news" />
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={mainnews} width={800} alt="top-news" />
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={mainnews} width={800} alt="top-news" />
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
                    </Grid>
                </Grid>



            </Box>
        </>
    );
};

export default LatestNews;