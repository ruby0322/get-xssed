import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

// import instance from "../axios";
import { Descriptions } from "antd";

const PostPage = () => {
  const { postId } = useParams();
  console.log('postId => ', postId);
  const exampleTitle = "Quant Intro";
  const exampleParagraph = "Quant, short for quantitative analysis or quantitative trading, \
  refers to the application of mathematical and statistical models to analyze financial markets \
  and make trading decisions. Here are some key points about quant: Definition: Quantitative analysis \
  involves using advanced mathematical and statistical techniques to identify patterns, relationships, \
  and trends in financial data. Quantitative traders develop and implement algorithms and models to \
  make data-driven trading decisions. \
  Data-driven approach: Quants rely heavily on historical and real-time market data, \
  such as price, volume, and other market indicators, \
  to develop and test trading strategies. They use quantitative models to analyze this data \
  and generate trading signals. Algorithmic trading: Quantitative traders often use algorithmic trading, \
  also known as algo trading or automated trading. Algorithms are designed to automatically execute trades \
  based on predefined rules and strategies. This approach allows for quick and precise trading decisions, \
  as well as the ability to exploit short-term market inefficiencies. \
  Risk management: Quantitative analysis includes rigorous risk management techniques. \
  Quants use statistical models to assess and manage risk, aiming to minimize potential losses and maximize risk-adjusted returns. \
  They may employ techniques such as portfolio optimization, value-at-risk (VaR) analysis, and stress testing. \
  High-frequency trading (HFT): HFT is a subset of quantitative trading that involves the use of sophisticated algorithms to execute a large number of trades in fractions of a second. \
  HFT strategies take advantage of small price discrepancies and market inefficiencies that may exist for only a brief moment. \
  Skillset and background: Quants typically have strong backgrounds in mathematics, statistics, computer science, or engineering. \
  They possess skills in programming and data analysis, as well as a deep understanding of financial markets and instruments. \
  Market impact: The rise of quant trading has had a significant impact on financial markets. \
  It has increased market liquidity, reduced trading costs, and introduced new trading strategies. \
  However, it has also raised concerns about market stability, as algorithms can amplify market movements and contribute to flash crashes. \
  It's important to note that quantitative analysis is a complex and specialized field, and successful implementation requires a combination of technical expertise, market knowledge, and continuous research and development.";

  return (
    <Descriptions title="Article" layout="vertical" bordered column={1}>
      <Descriptions.Item label="Title" contentStyle={{"font-size": "40px"}}>
        {exampleTitle}
      </Descriptions.Item>
      <Descriptions.Item label="Content" contentStyle={{"font-size": "18px"}} >
        {exampleParagraph}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default PostPage;
