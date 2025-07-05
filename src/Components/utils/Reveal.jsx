"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Reveal(props) {
  const { el, children, delay, className, duration = 0.5, ...rest } = props;

  const DynamicComponent = el ? motion(el) : motion.div;

  return (
    <DynamicComponent
      initial={{ opacity: 0, transitionProperty: "transform opacity" }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: duration, delay: delay }}
      className={className}
      {...rest}
    >
      {children}
    </DynamicComponent>
  );
}
