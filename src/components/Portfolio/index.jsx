import { Box, Container, Button, Grid, Typography, Chip, Card, CardMedia, CardContent } from "@mui/material";
import { Tabs, Tab } from "@mui/material";

import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React, { useState } from 'react';

const customButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    px: '20px',
    py: '10px',
    mt: 2,
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'Urbanist, sans-serif',
    textTransform: 'capitalize',
    color: '#80ff00',
    backgroundColor: '#25252579',
    border: '2px solid #80ff00',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.8s ease',
    '& svg': {
        fill: '#80ff00',
        transition: 'all 0.3s ease',
    },
    '&:hover': {
        backgroundColor: '#80ff00',
        color: '#000',
        fontWeight: 600,
        border: '1px solid #80ff00',
        '& svg': {
            fill: '#000',
            transform: 'rotate(360deg)',
        },
    },
};

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Roof Inspection App",
            image: "/image/projectroof.png",
            category: "React",
            tech: "HTML, React.js, MUI, PDF, AWS S3",
            route: "/projectroof",
        },
        {
            id: 2,
            title: "Foriio Portfolio Builder",
            image: "/image/forrio.png",
            category: "React",
            tech: "React.js, MUI, Routing",
            route: "/projectforiio",
        },
        {
            id: 3,
            title: "Construction Company Site",
            image: "/image/projectbootstrap.png",
            category: "Bootstrap",
            tech: "HTML, CSS, Bootstrap, JavaScript",
            route: "/projectconstructionbootstrap",
        },
        {
            id: 4,
            title: "Shopify - Fitgirl Application",
            image: "/image/fitgirl.png",
            category: "Shopify",
            tech: "Shopify, Custom Theme, Stripe",
            route: "/projectfitgirl",
        },
        {
            id: 5,
            title: "Shopify - Nuttition Application",
            image: "/image/nutrition.png",
            category: "Shopify",
            tech: "Shopify, Custom Theme, Stripe",
            route: "/projectnutriworld",
        },
        {
            id: 6,
            title: "Shopify - Ventinove Application",
            image: "/image/ventinove.png",
            category: "Shopify",
            tech: "Shopify, Custom Theme, Google & Apple PAY",
            route: "/projectventinove",
        },
        {
            id: 7,
            title: "Shopify - C&D Application",
            image: "/image/c&d.png",
            category: "Shopify",
            tech: "Shopify, Custom Theme, Paypal, Stripe",
            route: "/projectcd",
        },
        {
            id: 8,
            title: "Longevix",
            image: "/image/longevix.png",
            category: "WordPress",
            tech: "WordPress, Elementor, WooCommerce",
            route: "/projectlongevix",
        },
        {
            id: 9,
            title: "Shopify-Conatatural",
            image: "/image/conatural.png",
            category: "Shopify",
            tech: "Shopify, Custom Theme, Stripe",
            route: "/projectconatural",
        },
        {
            id: 10,
            title: "Shopify - Vivanmn",
            image: "/image/vivanum.png",
            category: "Shopify",
            tech: "Shopify, Custom Theme, Stripe",
            route: "/projectvivanmn",
        },
        {
            id: 11,
            title: "Shopify - Feals",
            image: "/image/fleas.png",
            category: "Shopify",
            tech: "Shopify, Custom Theme, Stripe",
            route: "/projectfeals",
        },
    ];
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (

        <Box
            id="services"
            sx={{
                width: "100%",
                background: "#1c2028",
                padding: "50px 0",
                boxShadow: "0 25px 30px rgba(0, 0, 0, 0.5)",
                zIndex: 85,
                position: "relative",
            }}>
            <Container sx={{
                width: "90%",
                padding: "0",
                margin: "auto"
            }}>
                <Box
                    sx={{

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                    }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "'Nanum Gothic Coding', monospace",
                            fontSize: "clamp(30px, 4vw, 15px)",
                            fontWeight: "bold",
                            color: "#fff",
                            textAlign: "center",
                        }}
                    >
                        MY PORTFOLIO
                    </Typography>

                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            value={selectedCategory}
                            onChange={(e, newValue) => setSelectedCategory(newValue)}
                            variant="scrollable"
                            scrollButtons="auto"
                            textColor="inherit"
                            indicatorColor="secondary"
                            disableRipple
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                '& button': {
                                    color: 'white !important',
                                    fontWeight: 500,
                                    textTransform: 'capitalize',
                                    fontSize: 16,
                                    fontFamily: "'Urbanist', sans-serif",
                                    mx: 1,
                                },
                                '& .Mui-selected': {
                                    color: 'black !important',
                                },
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#99ff33',
                                },
                            }}
                        >
                            {['All', 'React', 'Bootstrap', 'WordPress', 'Shopify'].map((category) => (
                                <Tab
                                    key={category}
                                    label={category}
                                    value={category}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    disableRipple
                                    disableFocusRipple

                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        fontFamily: 'Urbanist, sans-serif',
                                        textTransform: 'capitalize',
                                        color: '#fff',
                                        backgroundColor: selectedCategory === category ? '#80ff00' : '#25252579',
                                        border: selectedCategory === category ? '2px solid transparent' : '2px solid #80ff00',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s ease',
                                        minHeight: 'auto',
                                        px: 2.5,
                                        py: 1,
                                        outline: 'none', // extra safe
                                        '&.Mui-selected': {
                                            outline: 'none',
                                            boxShadow: 'none',
                                        },
                                        '&.Mui-focusVisible': {
                                            outline: 'none !important',
                                            boxShadow: 'none !important',
                                        },
                                        '&:hover': {
                                            backgroundColor: '#80ff00',
                                            color: '#fff',
                                            border: '2px solid transparent',
                                            outline: 'none !important',
                                            boxShadow: 'none !important',
                                        },
                                    }}
                                />
                            ))}
                        </Tabs>
                    </Box>

                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {projects
                            .filter(project => selectedCategory === "All" || project.category === selectedCategory)
                            .map((project, index) => (
                                <Grid item xs={12} sm={6} md={4} key={project.id}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            height: 300,
                                            overflow: "hidden",
                                            borderRadius: 1.5,
                                            "&:hover .overlay": {
                                                opacity: 1,
                                                backgroundColor: "rgba(0,0,0,0.2)",
                                                backdropFilter: "blur(2px)",
                                                cursor: "pointer",
                                            },
                                        }}>
                                        <Box
                                            component="img"
                                            src={project.image}
                                            alt={project.title}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <Box
                                            className="overlay"
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: index === 0 ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.7)",
                                                color: "#fff",
                                                opacity: index === 0 ? 1 : 0,
                                                transition: "all 0.5s ease",
                                                px: 2,
                                            }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    fontWeight: 400,
                                                    fontSize: 18,
                                                    textAlign: "center",
                                                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                                                    fontFamily: "'Urbanist', sans-serif",
                                                    mt: -2,
                                                }}>
                                                <Box component="strong" sx={{ color: "#99ff33" }}>
                                                    {project.title}
                                                </Box>
                                                , ({project.tech})
                                            </Typography>

                                            <Button
                                                component={Link}
                                                to={project.route}
                                                variant="outlined"
                                                sx={{
                                                    ...customButtonStyle,
                                                }}
                                                // sx={{
                                                //     mt: 2,
                                                //     borderColor: "#99ff33",
                                                //     color: "#99ff33",
                                                //     fontSize: 15,
                                                //     fontWeight: 500,
                                                //     px: 2.5,
                                                //     py: 1,
                                                //     borderRadius: "5px",
                                                //     textTransform: "none",
                                                //     transition: "all 0.3s ease",
                                                //     "&:hover": {
                                                //         backgroundColor: "#99ff33",
                                                //         color: "#000",
                                                //         borderColor: "#99ff33",
                                                //         svg: { transform: "rotate(360deg)", fill: "#000" },
                                                //     },
                                                // }}
                                                endIcon={<OpenInNewIcon sx={{ ml: 1, fill: "#99ff33", transition: "transform 0.5s ease" }} />}
                                            >
                                                Learn More
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                    </Grid>

                    <Box mt={4}>
                        <Button
                            component={Link}
                            to="#"
                            sx={{
                                borderColor: "#99ff33",
                                color: "#99ff33",
                                fontSize: 17,
                                fontWeight: 500,
                                fontFamily: "'Urbanist', sans-serif",
                                px: 3,
                                py: 1.5,
                                borderRadius: "5px",
                                textTransform: "none",
                                border: "2px solid #99ff33",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#99ff33",
                                    color: "#000",
                                    fontWeight: 600,
                                    svg: { transform: "rotate(360deg)", fill: "#000" },
                                },
                            }}
                            endIcon={<OpenInNewIcon sx={{ ml: 1, fill: "#99ff33", transition: "transform 0.5s ease" }} />}
                        >
                            View More
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};



export default Portfolio;
