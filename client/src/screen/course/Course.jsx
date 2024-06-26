import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import {Box, Grid, Container, Stack} from "@mui/material";
import { Card, CardContent, CardMedia, Typography,Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import chapters  from '../../utils/Chapters.jsx' ;



const  MultiActionAreaCard = ({chapter}) => {
  return (
    <Card sx={{ width: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={chapter.src}
          sx={{ maxHeight: 250,maxWidth:250,marginX:'auto' }} // Add this line to fix the height and width
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
            {chapter.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



export default function Course() {
  const navigate = useNavigate();

  const handleChapterNavigate = (chapter) => {
    // console.log(chapter);
    navigate(`/courses/${chapter.slug}`);
  }

  // console.log({chapters})

  return (
    <Container >
      <Stack spacing={2} alignItems={"center"} pt={10}>
          <Box m={4}/>
          <Typography variant="h3" color={"primary"} align="center">Explore the modules & learn
          </Typography>

          <Typography variant="h6" align="center">
            Chapters and modules play a crucial role in education by providing a
            systematic and organized approach to presenting information. Whether
            in traditional textbooks or modern online courses, these units
            contribute to effective learning by breaking down complex subjects
            into manageable, coherent sections.
          </Typography>

          <Button variant="contained" size="medium" >
            Chapters
          </Button>

        <Grid container spacing={4}>
          {chapters.map((chapter) => {
            return (
              <Grid
                item
                md={4}
                key={chapter.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  cursor: "pointer",
                }}
                onClick={() => handleChapterNavigate(chapter)}
              >
                <MultiActionAreaCard chapter={chapter} />
              </Grid>
            );
          })}
        </Grid>
        <Box m={4}/>
      </Stack>
    </Container>
  );
}
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { useNavigate } from 'react-router-dom'
// import chapters  from '../../utils/Chapters.jsx' ;

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   width: 320
// }));



// const CourseChapterItem = ({ chapter }) => {
//   return <Item>
//     {/* <a href={`http://localhost:5173/chapters/${chapter.slug}`}> */}

//     <div className='border-10 border-black w-40 h-40 mx-auto'>
//       <img
//         src={chapter.src}
//         alt={chapter.name}
//       />
//     </div>
//     <div className='text-md'>{chapter.name}</div>
//     {/* </a> */}

//   </Item>
// }


// export default function Course() {
//   const navigate = useNavigate();

//   const handleChapterNavigate = (chapter) => {
//     console.log(chapter);
//     navigate(`/courses/${chapter.slug}`);
//   }

//   console.log({chapters})

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <div className="w-full  py-6">

//         <div className='text-2xl text-blue-600 text-center '>Explore the modules & learn</div>

//         <div className='text-md text-black my-2 text-center px-2'>Chapters and modules play a crucial role in education by providing a systematic and organized approach to presenting information. Whether in traditional textbooks or modern online courses, these units contribute to effective learning by breaking down complex subjects into manageable, coherent sections.</div>

//         <div className='w-32 h-10 mx-auto px-4 py-2 my-2 rounded-full text-center text-white bg-[#7D7E83]'>
//           Chapters
//         </div>
//       </div>

//       <Grid container spacing={4}>
//         {
//           chapters.map((chapter) => {
//             return <Grid item md={4}
//               key={chapter.id}
//               sx={{ display: 'flex', justifyContent: 'space-around', cursor: 'pointer' }}
//                 onClick={() => handleChapterNavigate(chapter)}
//               >
//               <CourseChapterItem chapter={chapter} />
//             </Grid>
//           })
//         }
//       </Grid>
//     </Box>
//   );
// }