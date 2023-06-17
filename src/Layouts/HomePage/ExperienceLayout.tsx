import React, { useState } from "react";
import { Box, ImageList, ImageListItem, Typography} from "@mui/material";
import image1 from'../../Assets/images/Experience/experience1.png'
import image2 from'../../Assets/images/Experience/Experience2.png'
import image3 from'../../Assets/images/Experience/Experience3.png'
import image4 from'../../Assets/images/Experience/Experience4.png'
import image5 from'../../Assets/images/Experience/Experience5.png'
import image6 from'../../Assets/images/Experience/Experience6.png'
import image7 from'../../Assets/images/Experience/Experience7.png'
import image8 from'../../Assets/images/Experience/Experience8.png'
import image1T from'../../Assets/images/Experience/elf.png'
import image2T from'../../Assets/images/Experience/pizzaHot.png'
import image3T from'../../Assets/images/Experience/Budwiser.png'
import image4T from'../../Assets/images/Experience/SoftBank.png'
import image5T from'../../Assets/images/Experience/jloBeauty.png'
import image6T from'../../Assets/images/Experience/estrellaJalisco.png'
import image7T from'../../Assets/images/Experience/topGolf.png'
import image8T from'../../Assets/images/Experience/serviceBank.png'


function ExperienceLayout() {
  const [imageSrcType,setImageSrcType]=useState<number>(-1)
  const handleHover=(index:number)=>{setImageSrcType(index)}
  const handleHoverDone=(index:number)=>{setImageSrcType(-1)}

  const images=[
    {image:image1,title:image1T,rows:4,cols:2},
    {image:image2,title:image2T,rows:2,cols:2},
    {image:image3,title:image3T,rows:4,cols:1},
    {image:image4,title:image4T,rows:4,cols:1},
    {image:image5,title:image5T,rows:4,cols:1},
    {image:image6,title:image6T,rows:2,cols:1},
    {image:image8,title:image8T,rows:2,cols:2},
    {image:image7,title:image7T,rows:2,cols:1},
]

    function srcset(image: string, size: number, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }

  return (
    <Box sx={{backgroundColor:'black', width:'100%',height:'auto'}}>
        <Typography variant="h3" sx={{color:'white',textAlign:'center',padding:'3em 0em'}}>EXPERIENCE</Typography>
       <ImageList
      sx={{ width: '100%',margin:0,height:'auto' }}
      variant="quilted"
      cols={4}
      rowHeight={'auto'}
      gap={0}
    >
      {images.map((item,index) => (
        <ImageListItem key={item.image} cols={item.cols || 1} rows={item.rows || 1}>
          <img
          style={{height:'100%',objectFit:'fill'}}
          onMouseEnter={()=>handleHover(index)}
          onMouseLeave={()=>handleHoverDone(index)}
            {...srcset(index===imageSrcType?item.title:item.image, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
}

export default ExperienceLayout;
