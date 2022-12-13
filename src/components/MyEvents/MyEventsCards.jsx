import { TopicOutlined } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOwnEventsAsync } from "../../redux/actions/eventsAction";
import Loading from "../Loading/Loading";
import NoData from "../noData/NoData"

const MyEventsCards = () => {
  const events = useSelector(store => store.events)
  const { uid } = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOwnEventsAsync(uid))
  }, []);

  return (
    <>
      {
        events
          ? (
            events.map((event, index) => (
              <Box key={index} sx={{ width: 275, height: 'fit-content' }}>
                <Card variant="outlined" sx={{ backgroundColor: '#ffff' }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div" sx={{ color: '#00960F' }} >
                        {event.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5, color: '#F5B916' }} color="text.secondary" >
                        Productos del {event.region}
                      </Typography>
                      <Typography variant="body2">
                        {event.ubication}
                      </Typography>
                      <Typography sx={{ mb: 1.5, color: '#220BD4', mt: 1 }} color="text.secondary">
                        {event.date}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box >
            ))
          )
          : (<NoData text={'No tienes eventos'} />)
      }
    </>
  )
}
export default MyEventsCards;
