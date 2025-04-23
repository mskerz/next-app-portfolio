"use client";

import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { toaster } from "@/components/ui/toaster";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageForm, setMessageForm] = useState("");

  //theme
  const bgInputColor = useColorModeValue("white", "gray.600");

  function sendContact() {
    if (!name || !email || !messageForm) {
      toaster.create({
        title: "Warning",
        description: "Please fill in all fields.",
      });
      return;
    }
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${messageForm}`
    );
    const mailtoLink = `mailto:wichasin.s@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    toaster.info({
      title: "Success",
      description: "Your message has been sent successfully.",
    });
  }
  return (
    <div>
      <Box display="flex" flexDirection="column" gap={4} maxW="400px" mx="auto">
        <Flex gap={3}>
          <Flex flexDirection={"column"} gap={2}>
            <Text>Name</Text>
            <Input
              type="text"
              placeholder="your name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              variant="outline"
              bg={bgInputColor}
            />
          </Flex>
          <Flex flexDirection={"column"} gap={2}>
            <Text>Email</Text>

            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              variant="outline"
              bg={bgInputColor}
            />
          </Flex>
        </Flex>
        <Textarea
          placeholder="Message"
          value={messageForm}
          onChange={(e) => setMessageForm(e.target.value)}
          name="message"
          variant="outline"
          rows={6}
          maxLength={1024}
          bg={bgInputColor}
        />
      </Box>
      <Box mt={4}>
        <Button onClick={sendContact} type="button">
          Send
        </Button>
      </Box>
    </div>
  );
}

export default ContactForm;
