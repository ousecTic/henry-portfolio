import React from "react";
import ReactPlayer from "react-player";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <ReactPlayer url="https://www.youtube.com/watch?v=ldYcgPKEZC8" />
      <Details>
        <h1>Check out my youtube Channel!</h1>
        <p>
          I am a freecodecamp video contributer. I create content over
          deployment, database design, and full stack!
        </p>
        <Button style={{ marginRight: "1rem" }}>
          <a
            href="https://www.youtube.com/channel/UCAPuqvFWmUg_gc_AZHUBPsA"
            target="_blank"
            style={{ color: "white" }}
          >
            Check out my channel
          </a>
        </Button>

        <Button as={AnchorLink} href="#contact">
          Contact Me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
