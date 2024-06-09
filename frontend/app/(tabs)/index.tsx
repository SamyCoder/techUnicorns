// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

import React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {

  const [isLoading, setIsLoading] = useState('');

    // const htmlContent = `
    //   <!DOCTYPE html>
    //   <html>
    //     <head>
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //       <style>
    //         body, html {
    //           margin: 0;
    //           padding: 0;
    //           height: 100%;
    //           overflow: hidden;
    //         }
    //         .tiktok-embed {
    //           max-width: 605px;
    //           min-width: 325px;
    //           margin: auto;
    //         }
    //       </style>
    //     </head>
    //     <body>
    //       <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@aebr7an/video/7358680120380394798" data-video-id="7358680120380394798" style="max-width: 605px;min-width: 325px;" >
    //         <section> 
    //           <a target="_blank" title="@aebr7an" href="https://www.tiktok.com/@aebr7an?refer=embed">@aebr7an</a> Who was in the wrong?🤨 
    //           <a title="aebr7an" target="_blank" href="https://www.tiktok.com/tag/aebr7an?refer=embed">#aebr7an</a> 
    //           <a title="youngsheldon" target="_blank" href="https://www.tiktok.com/tag/youngsheldon?refer=embed">#youngsheldon</a> 
    //           <a title="showclips" target="_blank" href="https://www.tiktok.com/tag/showclips?refer=embed">#showclips</a> 
    //           <a title="youngsheldonedit" target="_blank" href="https://www.tiktok.com/tag/youngsheldonedit?refer=embed">#youngsheldonedit</a> 
    //           <a title="edits" target="_blank" href="https://www.tiktok.com/tag/edits?refer=embed">#edits</a> 
    //           <a title="youngsheldonnotiktok" target="_blank" href="https://www.tiktok.com/tag/youngsheldonnotiktok?refer=embed">#youngsheldonnotiktok</a> 
    //           <a title="missycooperedit" target="_blank" href="https://www.tiktok.com/tag/missycooperedit?refer=embed">#missycooperedit</a> 
    //           <a title="edit" target="_blank" href="https://www.tiktok.com/tag/edit?refer=embed">#edit</a> 
    //           <a title="sheldoncooperedit" target="_blank" href="https://www.tiktok.com/tag/sheldoncooperedit?refer=embed">#sheldoncooperedit</a> 
    //           <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a> 
    //           <a title="sheldoncooper" target="_blank" href="https://www.tiktok.com/tag/sheldoncooper?refer=embed">#sheldoncooper</a> 
    //           <a title="viraledits" target="_blank" href="https://www.tiktok.com/tag/viraledits?refer=embed">#viraledits</a> 
    //           <a title="textedits" target="_blank" href="https://www.tiktok.com/tag/textedits?refer=embed">#textedits</a> 
    //           <a title="original" target="_blank" href="https://www.tiktok.com/tag/original?refer=embed">#original</a> 
    //           <a title="originalcontent" target="_blank" href="https://www.tiktok.com/tag/originalcontent?refer=embed">#originalcontent</a> 
    //           <a target="_blank" title="♬ original sound - 🌟" href="https://www.tiktok.com/music/original-sound-7358680269354421034?refer=embed">♬ original sound - 🌟</a> 
    //         </section> 
    //       </blockquote> 
    //       <script async src="https://www.tiktok.com/embed.js"></script>
    //     </body>
    //   </html>
    // `;

    //API 
    
    //api get request for ombedding tiktok video

    // async function getTikTokEmbedings (link) => {
    //   const fetchLink = 'https://www.tiktok.com/oembed?url=' + link;
    //   const response = await 
    //   const data = await response.json();
    //   console.log(data);
    //   const htmlContent = data.html;
    //   return htmlContent;
    // }


    
    // const getTikTokEmbedings = function (link) {
    //   const fetchLink = 'https://www.tiktok.com/oembed?url=' + link;
    //   console.log(fetchLink)
    //   try {
    //     const data = fetch(fetchLink);
    //     console.log(data)
    //     // const jsonData = data.json();
    //     // console.log(jsonData);
    //     // const htmlContent = jsonData.html;
    //     // return htmlContent
    //     return ""
    //   } catch (error) {
    //     console.error("Failed to call TikTok Embed API:", error);
    //   }
    // };

    const getTikTokEmbedings = async function (link) {
      const fetchLink = 'https://www.tiktok.com/oembed?url=' + link;
      // console.log(fetchLink);
      try {
        const response = await fetch(fetchLink);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        const htmlContent = data.html;
        console.log(htmlContent);
        console.log("Before", isLoading)
        setIsLoading(htmlContent)
        console.log("Ans", isLoading)
        return htmlContent;
      } catch (error) {
        console.error("Failed to call TikTok Embed API:", error);
        return "";
      }
    };
    
   // Use the function to get video embedding
    // let htmlEmbed = ""
    // const displayTikTokVideo = async (link) => {
    //   const embedding = await getTikTokEmbedings(link);
    //   if (embedding) {
    //     // document.getElementById('tiktok-container').innerHTML = embedding;
    //     // htmlEmbed = embedding
    //     return embedding
    //   } else {
    //     console.log('Failed to get embedding');
    //   }
    // };
    
    // let htmlEmbed = displayTikTokVideo('https://www.tiktok.com/@daniel.ploo/video/7358112343638740267');
    // console.log("EMBEDD", htmlEmbed)

    getTikTokEmbedings('https://www.tiktok.com/@daniel.ploo/video/7358112343638740267')
  
    
  return (
    
    <View style={styles.container}>
      {isLoading ? (
      <>
          <WebView
          originWhitelist={['*']}
          source={{ html: isLoading }}
          scalesPageToFit={true}
          style={{ flex: 1 }}
        />
      </>
      ) : (
        <>
          <Text>Hello World!</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 100,
    left: 100,
    gap: 8,
  },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
});
