<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
    <head>
      <title>XSL</title>
    </head>
    <body style = 'text-align: center; font-family:Cursive'>
      <center>
        <xsl:for-each select="mixedteams/basketball">
          <xsl:variable name = "Color" select="Color"/> 
          <xsl:variable name = "BColor" select="BColor"/> 
          <xsl:variable name = "Image" select="Image"/> 
          <xsl:variable name = "Video" select="Video"/> 
          <table border='1' style = 'width:550px; background-color:{$BColor}; color:{$Color}; text-align:center'>
            <tr>
              <td colspan="6"><xsl:value-of select ="Team"/></td>
            </tr>
            <tr>
              <td>Image</td>
              <td colspan="3">All-star</td>
              <td>Coach</td>
              <td>Stadium</td>
            </tr>
            <tr>
              <td><Image src = "{$Image}" style="width:80px; height:80px;"></Image></td>
              <td><xsl:value-of select ="All-star/name"/></td>
              <td>AGE:<xsl:value-of select ="All-star/age"/></td>
              <td><xsl:value-of select ="All-star/position"/></td>
              <td><xsl:value-of select ="Coach"/></td>
              <td><xsl:value-of select ="Stadium"/></td>
            </tr>
            <tr>
              <td colspan='6'>
                <iframe width='550' height='550' src="{$Video}" frameborder='0'></iframe>
              </td>
            </tr>
          </table>
          <br/>
        </xsl:for-each>
      </center>
    </body>
  </html>
</xsl:template>

</xsl:stylesheet>