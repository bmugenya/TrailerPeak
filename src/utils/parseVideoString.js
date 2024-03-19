const parseVideoString = (videoString) => {
  const iframeSrcArray = [];


  // Split the videoString into individual video segments
  const videoSegments = videoString.split('|');

  // Iterate over each video segment
  for (let i = 0; i < videoSegments.length; i += 4) {
    // Ensure that there are enough segments to extract information
    if (videoSegments[i + 1] && videoSegments[i + 2] && videoSegments[i + 3]) {
      // Extract relevant information from the segment
      const iframeSrcMatch = videoSegments[i].match(/src=["'](.*?)["']/);

      // Check if the match is not null and the iframeSrc is not an empty string
      const iframeSrc = iframeSrcMatch ? iframeSrcMatch[1] : '';
      if (iframeSrc.trim() !== '') {
        // Push the iframeSrc to the iframeSrcArray only if it's not an empty string
        iframeSrcArray.push(iframeSrc);
      
      }

   
    }
  }

  const jsonContent = JSON.stringify(iframeSrcArray, null, 2);

  // Create a Blob containing the JSON data
  const blob = new Blob([jsonContent], { type: 'application/json' });

  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'output.json';

  // Append the link to the body and trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Remove the link from the body
  document.body.removeChild(downloadLink);

  return iframeSrcArray;
};

export default parseVideoString;
