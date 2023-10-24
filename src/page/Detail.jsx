import { Grid, Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stateID, setStateID] = useState([]);
  useEffect(() => {
    async function getID() {
      try {
        const getID = await axios.get(`http://localhost:3333/data/${id}`)
        setStateID(getID.data)
      }
      catch (error) {
      }
    }
    getID()
  }, [id])
  const ViewBack = () => {
    navigate('/');
  }
  return (
    <div>
      <Grid sx={{ bgcolor: '#cfe8fc', display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "630px" }} container spacing={2} >
        <Box sx={{ width: "70%", height: "60vh" }}>
        <h1>Detail of House For Sale</h1>
          <Grid item >
            <Card sx={{ bgcolor: 'rgb(156, 175, 201);' }}>
              <CardMedia
                sx={{ height: 140 }}
                image={stateID.imageUrl}
                title="green iguana" />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {stateID.title}
                </Typography>
                <Typography variant="p" color="text.secondary">
                  {stateID.address}
                  <h3>Beds:{stateID.beds} Bath:{stateID.bath}</h3>
                  <h3>CoveredAreaSQFT:{stateID.coveredAreaSQFT} PropertyType:{stateID.propertyType}</h3>
                  <h3>Price:{stateID.price}</h3>
                </Typography>
              </CardContent>

            </Card>
          </Grid>
          <Grid lg={12} xs={12} sm={12} xl={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
          <Button sx={{marginTop:"5px"}} variant="contained" onClick={ViewBack}>Back</Button>
        </Grid>
        </Box>
       
      </Grid>
    </div>
  )
}
