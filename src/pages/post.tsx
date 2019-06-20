import * as React from 'react';
import { BlogHeader, Container, CommentList } from '../components';

export function Post() {
  return (
    <React.Fragment>

      <BlogHeader />

      <Container>
        <p>
          Hello, I need some filler text here. So I'm just gonna keep typing. I'm actually writing this on a plane. I don't have access to the internet. Which means I can't just go to some lorem ipsum site and paste in a bunch of text.
        </p>

        <p>
          This forces me to write a bunch of useless sentences just so I can make this page look like a blog post. It's funny how it's hard to think of something to type on the spot. I'm sitting in a window seat. There's a bunch of clouds. Oh great, turbulence is coming. That has to be my least favorite part of flying.
        </p>

        <p>
          The airplane gets all bumpy and I look around to see if anyone else is freaking out. But no, it's just me. Everybody else is fast asleep and I'm all like "WHEN ARE WE LANDING!".
        </p>

        <p>
          Is this enough paragraphs yet? I'm not really sure because I haven't run it in a browser yet. I really hope it's enough because I'm running out of things to say. You can only write so many run on sentences for so long.
        </p>

        <p>
          I need coffee. I mean, I just had a cup. But, I woke up at 2:45am. That's a time no one should wake up at. When you wake up at 2:45am you're body is all like "Woah. Get back in bed pronto, buddy. Your feed should not be on the floor." Then I wander around the room for like 15 minutes looking for my cellphone, which is in my hand. I mean, I was even using my cellphone light to find my cellphone.
        </p>

        <p>
          Okay, this has to be enough text. I really feel like this is a good enough length for a blog post. So thank you, for sitting through the worst blog post ever written.
        </p>
      </Container>

      <Container>
        <CommentList />
      </Container>
      
    </React.Fragment>
  )
}
