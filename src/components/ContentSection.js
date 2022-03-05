import React from 'react';
import editorIllustrationDesktop from "../assets/illustration-editor-desktop.svg";

const ContentSection = ({title}) => {
  return (
    <section>
        <h2>Designed for the future</h2>
        <ContentSectionSubsection subtitle={subtitle} para={para} />
        <ContentSectionSubsection subtitle={subtitle} para={para} />
        <img src={editorIllustrationDesktop} alt=""></img>
     </section>
  )
}

export default ContentSection