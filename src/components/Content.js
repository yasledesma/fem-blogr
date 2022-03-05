import React from "react";

const Content = () => {

  const sections = {
    1: {
      title: "Designed for the future",
      subtitle: ["Introducing an extensible editor", "Robust content management"],
      para: [`Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
      The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
      videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
      change the looks of a blog.`, `Flexible content management enables users to easily move through posts. Increase the usability of your blog 
      by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.`]
    },
    2: {

    },
    3: {

    }
  }

  return (
    <div className="Content">
      <ContentSection title={title} />
    </div>
  );
};

export default Content;
