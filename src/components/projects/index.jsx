import React from "react";
import { Box, Grid, Container, Typography, Button, Link } from "@mui/material";

const customButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    px: '20px',
    py: '10px',
    fontSize: '16px',
    fontWeight: 400,
    fontFamily: 'Urbanist, sans-serif',
    textTransform: 'capitalize',
    color: '#80ff00',
    backgroundColor: 'transparent',
    border: '1px solid #80ff00',
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


const Portfolioprojects = ({ title, subtitle, imagesrc, imagealt, description, links, stack, stack1 }) => {
    return (
        <Box sx={{
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
            }} >
                {/* Grid Section */}
                <Grid container spacing={4} alignItems="center">

                    {/* Left Grid: Title, Subtitle, Buttons */}
                    <Grid item xs={12} md={6}>
                        <Box>
                            {title && (
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: 'clamp(30px, 4vw, 45px)',
                                        fontWeight: 'bold',
                                        fontFamily: '"Nanum Gothic Coding", monospace',
                                        lineHeight: 1.2,
                                        color: '#80ff00',
                                        mb: 2
                                    }}
                                >
                                    {title}
                                    {/* <Box sx={{ color: '#80ff00' }}>"{title}"</Box> */}
                                </Typography>
                            )}
                            {subtitle && (
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '1rem',
                                        fontFamily: '"urbanist", sans-serif',
                                        lineHeight: 1.5,
                                        color: 'white',
                                        mb: 3
                                    }}>
                                    {subtitle}
                                </Typography>
                            )}

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                {links?.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        underline="none"
                                        download={link.download || false}
                                        style={{ textDecoration: 'none' }}
                                        target="_blank" // ✅ open in new tab
                                        rel="noopener noreferrer" // ✅ security best practice
                                    >
                                        <Button
                                            endIcon={link.icon}
                                            sx={customButtonStyle} // ✅ apply sx styling
                                            target
                                        >
                                            {link.text}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Grid: Image */}
                    <Grid item xs={12} md={6}>
                        {imagesrc && (
                            <Box
                                component="img"
                                src={imagesrc}
                                alt={imagealt || "Project Image"}
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                    boxShadow: 3,
                                }}
                            />
                        )}
                    </Grid>
                </Grid>

                {/* About Me Style Description */}
                {description && (
                    <Box sx={{ mt: 8, px: { xs: 2, md: 0 } }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: 'clamp(30px, 4vw, 15px)',
                                fontFamily: '"Nanum Gothic Coding", monospace',
                                mb: 1,
                                color: 'white'
                            }}
                        >
                            Overview
                        </Typography>


                        <Box sx={{ display: 'flex', alignItems: 'start', gap: 2, flexWrap: 'wrap' }}>
                            {/* Custom HR Line */}
                            <Box
                                sx={{
                                    flex: { xs: '0 0 100px', sm: '0 0 clamp(100px, 20%, 200px)' },
                                    height: '2px',
                                    backgroundColor: '#99ff33',
                                    mt: 1
                                }}
                            >
                                <Box sx={{ display: 'inline-block', width: '100%', height: '100%' }} />
                            </Box>
                            {stack1 && (
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '1.4rem',
                                        fontFamily: '"urbanist", sans-serif',
                                        color: '#99ff33',
                                        fontWeight: 500,
                                        mb: 2
                                    }}
                                >
                                    "{stack1}"
                                </Typography>
                            )}
                            {/* Description Text */}
                            <Typography
                                component="p"
                                sx={{
                                    flex: '1 1 clamp(300px, 70%, 100%)',
                                    fontFamily: '"urbanist", sans-serif',
                                    fontSize: '1rem',
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    color: 'white',
                                    '& strong': {
                                        color: '#99ff33',
                                        fontWeight: 400
                                    }
                                }}
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </Box>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default Portfolioprojects;
