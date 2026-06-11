---
permalink: /
title: "Jareen Anjom"
excerpt: "Researcher in AI, Deep Learning, and Computer Vision"
layout: single
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  html {
    scroll-behavior: smooth;
  }
  
  .page-shell {
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 40px;
    align-items: start;
  }
  
  .profile-sidebar {
    position: sticky;
    top: 100px;
    padding: 20px 16px;
    background: #ffffff;
    border: 1px solid #e6e6e6;
    border-radius: 24px;
    box-shadow: 0 18px 50px rgba(44, 44, 44, 0.06);
  }
  
  .profile-sidebar h1 {
    font-size: 1.8em;
    margin: 12px 0 6px;
    color: #1f2937;
  }
  
  .profile-image {
    width: 170px;
    height: 227px;
    border-radius: 8px;
    margin: 0 auto 16px;
    background-color: #f5f7fb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #9ca3af;
    border: 2px solid #e5e7eb;
  }
  
  .profile-meta {
    list-style: none;
    padding: 0;
    margin: 0 0 12px;
    color: #374151;
    font-size: 0.90em;
    line-height: 1.5;
  }
  
  .profile-meta li {
    margin-bottom: 8px;
  }
  
  .profile-meta a {
    color: #1d4ed8;
    text-decoration: none;
  }
  
  .profile-meta a:hover {
    text-decoration: underline;
  }
  
  .profile-email {
    font-size: 0.95em;
    color: #1f2937;
    word-break: break-all;
  }
  
  .profile-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }
  
  .profile-link-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 7px 8px;
    border-radius: 8px;
    color: white;
    font-size: 0.75em;
    font-weight: 600;
    text-decoration: none;
    min-height: 34px;
    transition: background-color 0.3s ease;
  }
  
  .profile-link-icon {
    font-size: 1em;
  }
  
  .profile-link-button.scholar {
    background-color: #4285f4;
  }
  
  .profile-link-button.scholar:hover {
    background-color: #5B9FFF;
  }
  
  .profile-link-button.orcid {
    background-color: #A6CE39;
    color: #111;
  }
  
  .profile-link-button.orcid:hover {
    background-color: #B8D85D;
  }
  
  .profile-link-button.github {
    background-color: #171515;
  }
  
  .profile-link-button.github:hover {
    background-color: #3A3A38;
  }
  
  .profile-link-button.linkedin {
    background-color: #0077B5;
  }
  
  .profile-link-button.linkedin:hover {
    background-color: #1E90FF;
  }
  
  .profile-link-button.cv {
    background-color: #e74c3c;
  }
  
  .profile-link-button.cv:hover {
    background-color: #EC6C52;
  }
  
  .profile-summary {
    color: #555b63;
    line-height: 1.7;
    font-size: 0.98em;
    margin-bottom: 24px;
  }
  
  .profile-meta {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
    color: #4b5563;
    font-size: 0.95em;
    line-height: 1.8;
  }
  
  .profile-meta li {
    margin-bottom: 10px;
  }
  
  .profile-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
  
  .profile-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.3s;
    font-size: 0.92em;
  }
  
  .profile-links a:hover {
    background-color: #0056b3;
  }
  
  .section {
    margin-bottom: 30px;
    padding: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .section:last-child {
    border-bottom: none;
  }
  
  .section h2 {
    font-size: 2em;
    margin-bottom: 30px;
    color: #222;
  }
  
  .section h3 {
    font-size: 1.3em;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #444;
  }
  
  .what-new-list,
  .publication-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .what-new-list li {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid #edeff2;
    color: #444;
    line-height: 1.6;
    font-size: 0.96em;
  }
  
  .what-new-list li:last-child {
    border-bottom: none;
  }
  
  .what-new-date {
    font-weight: 600;
    color: #007bff;
    font-size: 0.95em;
  }
  
  .publication-list li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    padding: 10px 0;
    border-bottom: 1px solid #edeff2;
    color: #444;
    font-size: 0.95em;
  }
  
  .publication-list li:last-child {
    border-bottom: none;
  }
  
  .publication-ref {
    max-width: calc(100% - 100px);
  }
  
  .publication-title {
    font-weight: 600;
    margin-bottom: 4px;
    font-size: 0.98em;
    color: #1f2937;
  }
  
  .publication-meta {
    margin: 0;
    font-size: 0.92em;
    color: #555;
    line-height: 1.5;
  }
  
  .doi-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.80em;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }
  
  .doi-button:hover {
    background-color: #0056b3;
  }
  
  .what-new-item,
  .publication-item,
  .experience-item {
    margin-bottom: 25px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 12px;
  }
  
  .what-new-item {
    border-left: 4px solid #007bff;
  }
  
  .publication-title {
    font-weight: bold;
    font-size: 1.05em;
    margin-bottom: 8px;
    color: #1f2937;
  }
  
  .publication-meta {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
  
  .publication-links {
    margin-top: 12px;
  }
  
  .publication-links a {
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 8px;
    padding: 7px 12px;
    background-color: #e8e8e8;
    color: #333;
    text-decoration: none;
    border-radius: 6px;
    font-size: 12px;
    transition: background-color 0.3s;
  }
  
  .publication-links a:hover {
    background-color: #d0d0d0;
  }
  
  .position-title {
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
    color: #1f2937;
  }
  
  .position-org {
    color: #007bff;
    font-size: 0.95em;
    margin-bottom: 8px;
  }
  
  .position-dates {
    font-size: 13px;
    color: #999;
    margin-bottom: 10px;
    font-style: italic;
  }
  
  .position-bullets {
    margin-left: 20px;
  }
  
  .position-bullets li {
    margin-bottom: 10px;
    line-height: 1.6;
    color: #555;
    font-size: 14px;
  }
  
  .nav-anchor {
    display: block;
    height: 60px;
    margin-top: -60px;
    visibility: hidden;
  }
  
  @media (max-width: 1024px) {
    .page-shell {
      grid-template-columns: 1fr;
    }
    
    .profile-sidebar {
      position: relative;
      top: auto;
      margin-bottom: 40px;
    }
  }
  
  @media (max-width: 640px) {
    .profile-links {
      grid-template-columns: 1fr;
    }
    
    .profile-image {
      width: 180px;
      height: 240px;
    }
  }
</style>

<!-- Hero Section -->
<div class="page-shell">
  <aside class="profile-sidebar">
    <div id="home" class="nav-anchor"></div>
    <div class="profile-image">
      <img src="/images/Profile-Picture1.png" alt="Jareen Anjom" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
    </div>
    <h1>Jareen Anjom</h1>
    <ul class="profile-meta">
      <li>Kuwait City, Kuwait</li>
      <li><a href="https://www.fidelity-technologies.com" target="_blank"><strong>AI Specialist</strong> at Fidelity Technologies</a></li>
      <li><a href="https://www.ku.edu.kw" target="_blank"><strong>Research Assistant</strong> at Kuwait University</a></li>
      <li class="profile-email">jareenanjom02@gmail.com</li>
    </ul>
    <div class="profile-links">
      <a class="profile-link-button scholar" href="https://scholar.google.com/citations?user=1hBBLEkAAAAJ&hl=en" target="_blank"><i class="fas fa-graduation-cap"></i>Google Scholar</a>
      <a class="profile-link-button orcid" href="https://orcid.org/0009-0003-9091-9992" target="_blank"><i class="fab fa-orcid"></i>ORCID</a>
      <a class="profile-link-button github" href="https://github.com/jareenanjom" target="_blank"><i class="fab fa-github"></i>GitHub</a>
      <a class="profile-link-button linkedin" href="https://www.linkedin.com/in/jareenanjom/" target="_blank"><i class="fab fa-linkedin-in"></i>LinkedIn</a>
    </div>
  </aside>
  <div class="page-content">

<!-- About Me Section -->
<div class="section">
  <h2>About Me</h2>
  <p><strong>I am an AI Specialist</strong> at <strong>Fidelity Technologies</strong> and a <strong>Research Assistant</strong> at <strong>Kuwait University</strong>. My research interests lie at the intersection of <strong>Deep Learning</strong>, <strong>Healthcare AI</strong>, <strong>Wearable Computing</strong>, <strong>Assistive Technologies</strong>, <strong>Satellite Imagery Analysis</strong>, and <strong>Edge Intelligence</strong>, with a particular focus on developing efficient machine learning systems for resource-constrained devices.</p>
  <p>Currently, I contribute to both industry and academic research, developing <strong>AI-driven solutions</strong> for real-world applications while conducting research in <strong>healthcare AI</strong> and <strong>scientific machine learning</strong>. My work spans <strong>wearable sensing</strong>, <strong>computer vision</strong>, <strong>edge intelligence</strong>, and <strong>physics-informed learning</strong>, with the goal of creating intelligent systems that are both <strong>impactful</strong> and <strong>deployable</strong>.</p>
  <p>I received my <strong>B.Sc. in Computer Science and Engineering</strong> from <strong>North South University, Bangladesh</strong>, graduating <strong>Summa Cum Laude</strong> and ranking among the <strong>top 5%</strong> of my graduating class. My research has resulted in <strong>peer-reviewed publications</strong> in healthcare AI, assistive technologies, computer vision, satellite imagery analysis, and edge intelligence.</p>
  <p>I am currently seeking <strong>PhD opportunities</strong> and <strong>research collaborations</strong> aligned with my interests in artificial intelligence, healthcare technologies, edge intelligence, and scientific machine learning. <span style="display: inline-block; margin-left: 12px;"><a class="profile-link-button cv" href="/files/Jareen_Anjom_CV.pdf" target="_blank" style="padding: 5px 10px; font-size: 0.70em;"><i class="fas fa-file-pdf"></i>CV</a></span></p>
</div>

<!-- What's New Section -->
<div class="section">
  <h2>What's New</h2>
  <ul class="what-new-list">
    <li>
      <span class="what-new-date">June, 2026</span>
      <span>Appointed RA at Kuwait University for a new project: <i>"Modeling Ultrasound Waves using Physics-Informed ResNet Approximators"</i> (Grant ZF01/25)</span>
    </li>
    <li>
      <span class="what-new-date">January, 2026</span>
      <span>Q1 Publication now online: <i>"SatNet-B3: A Lightweight Deep Edge Intelligence Framework for Satellite Imagery Classification"</i> in <i>Future Internet</i>, <a href="https://doi.org/10.3390/fi17120579" target="_blank">doi: 10.3390/fi17120579</a></span>
    </li>
    <li>
      <span class="what-new-date">November, 2025</span>
      <span><a href="https://kicls.ku.edu.kw/" target="_blank">KICLS'25</a>: Presentation of <i>"Pulse of the Campus: Real-Time Health Tracking with Bangle.js 2"</i></span>
    </li>
  </ul>
</div>

<!-- Visual Overview Section -->
<div class="section">
  <h2>Research Pipeline: From Training to Edge Deployment</h2>
  <p style="color: #666; margin-bottom: 30px; font-size: 0.95em;">
    Training intelligent models is only half the challenge. My research focuses on making them efficient enough to run in real-world environments. Click through the stages below to explore the edge intelligence optimization process.
  </p>

  <style>
    .pipeline-container {
      background: linear-gradient(135deg, #f5f7fa 0%, #fafbfc 100%);
      border-radius: 16px;
      padding: 30px;
      margin-bottom: 30px;
    }

    .pipeline-controls {
      display: flex;
      gap: 10px;
      margin-bottom: 25px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .stage-btn {
      padding: 10px 16px;
      border: 2px solid #ddd;
      border-radius: 8px;
      background: white;
      color: #666;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.88em;
      transition: all 0.3s ease;
    }

    .stage-btn:hover {
      border-color: #007bff;
      color: #007bff;
    }

    .stage-btn.active {
      background: #007bff;
      color: white;
      border-color: #007bff;
    }

    .pipeline-content {
      min-height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .stage-visualization {
      display: none;
      text-align: center;
      animation: fadeIn 0.5s ease-in-out;
    }

    .stage-visualization.active {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Stage 1: Training */
    .training-network {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin: 20px 0;
    }

    .node {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #007bff;
      animation: pulse 2s ease-in-out infinite;
    }

    .node:nth-child(2) { animation-delay: 0.2s; }
    .node:nth-child(3) { animation-delay: 0.4s; }
    .node:nth-child(4) { animation-delay: 0.6s; }
    .node:nth-child(5) { animation-delay: 0.8s; }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.3); opacity: 0.6; }
    }

    /* Stage 2: Compression */
    .compression-viz {
      display: flex;
      justify-content: center;
      gap: 30px;
      align-items: center;
      margin: 20px 0;
    }

    .compression-column {
      text-align: center;
    }

    .nodes-before, .nodes-after {
      display: grid;
      grid-template-columns: repeat(5, 12px);
      gap: 8px;
      justify-content: center;
      margin: 15px 0;
    }

    .small-node {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #007bff;
    }

    .small-node.faded {
      opacity: 0.2;
      background: #ddd;
      animation: fadeOut 1s ease-in-out forwards;
    }

    @keyframes fadeOut {
      to { opacity: 0; }
    }

    .arrow-down {
      font-size: 24px;
      color: #666;
      margin: 10px 0;
    }

    /* Stage 3: Quantization */
    .quantization-viz {
      display: flex;
      justify-content: center;
      gap: 40px;
      align-items: center;
      margin: 20px 0;
    }

    .quant-column {
      text-align: center;
    }

    .quant-box {
      background: white;
      border: 2px solid #007bff;
      padding: 15px 25px;
      border-radius: 8px;
      font-weight: 600;
      color: #007bff;
      margin-bottom: 10px;
    }

    .memory-bar {
      background: linear-gradient(90deg, #e74c3c 0%, #27ae60 100%);
      height: 20px;
      border-radius: 4px;
      max-width: 120px;
      margin: 10px auto;
      animation: shrink 1s ease-in-out forwards;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.75em;
      font-weight: 600;
    }

    @keyframes shrink {
      from { width: 150px; }
      to { width: 60px; }
    }

    /* Stage 4: Benchmarking */
    .benchmark-chart {
      width: 100%;
      max-width: 400px;
      margin: 20px auto;
    }

    .benchmark-row {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      gap: 15px;
    }

    .benchmark-label {
      min-width: 120px;
      text-align: right;
      font-size: 0.9em;
      font-weight: 600;
      color: #333;
    }

    .bar-container {
      flex: 1;
      height: 30px;
      background: #f0f0f0;
      border-radius: 6px;
      overflow: hidden;
      position: relative;
    }

    .bar {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;
      color: white;
      font-weight: 600;
      font-size: 0.85em;
      animation: expandBar 1s ease-out forwards;
    }

    .bar.original {
      background: linear-gradient(90deg, #3498db, #2980b9);
    }

    .bar.optimized {
      background: linear-gradient(90deg, #27ae60, #229954);
    }

    @keyframes expandBar {
      from { width: 0; }
    }

    .benchmark-value {
      min-width: 80px;
      text-align: left;
      font-weight: 600;
      color: #333;
      font-size: 0.9em;
    }

    /* Stage 5: Deployment */
    .devices-carousel {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 20px 0;
      flex-wrap: wrap;
    }

    .device {
      font-size: 48px;
      opacity: 0.3;
      transition: all 0.3s ease;
    }

    .device.active {
      font-size: 64px;
      opacity: 1;
      animation: bounce 0.6s ease-in-out;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .stage-title {
      font-size: 1.3em;
      font-weight: 700;
      color: #222;
      margin-bottom: 20px;
    }

    .stage-description {
      color: #666;
      font-size: 0.95em;
      max-width: 500px;
      margin: 15px auto;
      line-height: 1.6;
    }
  </style>

  <div class="pipeline-container">
    <div class="pipeline-controls">
      <button class="stage-btn active" data-stage="1">1️⃣ Training</button>
      <button class="stage-btn" data-stage="2">✂️ Compression</button>
      <button class="stage-btn" data-stage="3">⚡ Quantization</button>
      <button class="stage-btn" data-stage="4">📊 Benchmarking</button>
      <button class="stage-btn" data-stage="5">📱 Deployment</button>
    </div>

    <div class="pipeline-content">
      <!-- Stage 1: Training -->
      <div class="stage-visualization active" data-stage="1">
        <div class="stage-title">Training: Building the Deep Learning Model</div>
        <div class="training-network">
          <div class="node"></div>
          <div class="node"></div>
          <div class="node"></div>
          <div class="node"></div>
          <div class="node"></div>
        </div>
        <div class="stage-description">
          Neural networks learn patterns from large datasets. Weights are optimized iteratively to minimize prediction error.
        </div>
      </div>

      <!-- Stage 2: Compression -->
      <div class="stage-visualization" data-stage="2">
        <div class="stage-title">Compression: Pruning Unnecessary Connections</div>
        <div class="compression-viz">
          <div class="compression-column">
            <div style="font-size: 0.9em; font-weight: 600; color: #666;">Before: 50 nodes</div>
            <div class="nodes-before">
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
            </div>
          </div>
          <div class="arrow-down">→</div>
          <div class="compression-column">
            <div style="font-size: 0.9em; font-weight: 600; color: #27ae60;">After: 20 nodes</div>
            <div class="nodes-after">
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node"></div>
              <div class="small-node faded"></div>
              <div class="small-node faded"></div>
              <div class="small-node faded"></div>
              <div class="small-node faded"></div>
              <div class="small-node faded"></div>
              <div class="small-node faded"></div>
            </div>
          </div>
        </div>
        <div class="stage-description">
          Remove redundant connections and weights that contribute minimally to predictions, reducing model size without sacrificing accuracy.
        </div>
      </div>

      <!-- Stage 3: Quantization -->
      <div class="stage-visualization" data-stage="3">
        <div class="stage-title">Quantization: Reducing Precision</div>
        <div class="quantization-viz">
          <div class="quant-column">
            <div style="font-size: 0.9em; font-weight: 600; color: #666;">Before</div>
            <div class="quant-box">FP32 (32-bit)</div>
            <div style="font-size: 0.85em; color: #666; margin-top: 10px;">45 MB</div>
          </div>
          <div class="arrow-down" style="font-size: 32px;">→</div>
          <div class="quant-column">
            <div style="font-size: 0.9em; font-weight: 600; color: #27ae60;">After</div>
            <div class="quant-box" style="border-color: #27ae60; color: #27ae60;">INT8 (8-bit)</div>
            <div class="memory-bar" style="width: 60px;">12 MB</div>
          </div>
        </div>
        <div class="stage-description">
          Convert floating-point weights to lower precision (8-bit integers). Reduces model size by 75% while maintaining performance.
        </div>
      </div>

      <!-- Stage 4: Benchmarking -->
      <div class="stage-visualization" data-stage="4">
        <div class="stage-title">Benchmarking: Measuring the Impact</div>
        <div class="benchmark-chart">
          <div class="benchmark-row">
            <div class="benchmark-label">Original Model</div>
            <div class="bar-container">
              <div class="bar original" style="width: 100%;">120 ms</div>
            </div>
            <div class="benchmark-value">Accuracy: 96%</div>
          </div>
          <div class="benchmark-row">
            <div class="benchmark-label">Optimized Model</div>
            <div class="bar-container">
              <div class="bar optimized" style="width: 32%; animation-delay: 0.3s;">38 ms</div>
            </div>
            <div class="benchmark-value">Accuracy: 95%</div>
          </div>
        </div>
        <div class="stage-description">
          <strong>3.2× faster inference</strong> with minimal accuracy loss. The optimized model runs in real-time on edge devices.
        </div>
      </div>

      <!-- Stage 5: Deployment -->
      <div class="stage-visualization" data-stage="5">
        <div class="stage-title">Deployment: Real-World Edge Devices</div>
        <div class="devices-carousel">
          <div class="device" id="device-watch">⌚</div>
          <div class="device" id="device-phone">📱</div>
          <div class="device" id="device-satellite">🛰</div>
          <div class="device" id="device-embedded">🖥</div>
        </div>
        <div class="stage-description">
          Optimized models deploy across diverse hardware: wearables for health monitoring, smartphones for assistive technologies, and edge sensors for satellite imagery analysis.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- About / Research Background Section -->
<div id="about" class="nav-anchor"></div>
<div class="section">
  <h2>Research Background</h2>
  
  <h3>Deep Learning for Healthcare</h3>
  <p>
    I focus on leveraging deep learning models for medical and physiological data analysis, with direct applications in disease detection, health risk prediction, and continuous monitoring systems. This includes work on respiratory disease detection from spectrograms (sequential cough sounds) and heat stress prediction in real-time wearable systems, enabling early intervention and personalized healthcare solutions.
  </p>
  
  <h3>Edge Intelligence</h3>
  <p>
    Developing lightweight, high-performance neural networks that can be deployed on resource-constrained edge devices. My research explores model optimization techniques—including quantization, pruning, and knowledge distillation—to enable efficient inference on mobile and embedded systems without sacrificing accuracy. This is critical for deploying AI solutions in practical, real-world environments.
  </p>
  
  <h3>Computer Vision for Assistive Technologies</h3>
  <p>
    Designing real-time perception systems that include object detection, semantic segmentation, and depth estimation to enhance mobility and navigation for visually impaired users. On-device models on smartphones were developed that provide tactile and auditory feedback for safer footpath navigation and enhanced environmental awareness on Bangladeshi roads and similar contexts.
  </p>
</div>

<!-- Experience Section -->
<div id="experience" class="nav-anchor"></div>
<div class="section">
  <h2>Experience</h2>
  
  <h3>Industry</h3>
  <div class="experience-item">
    <div class="position-title">AI Specialist</div>
    <div class="position-org">Fidelity Technologies, Kuwait | May 2025 – Present</div>
    <ul class="position-bullets">
      <li>Develop and maintain on-premise AI assistants using lightweight LLMs, HuggingFace models, Ollama, Retrieval-Augmented Generation (RAG), and intelligent agent frameworks.</li>
      <li>Integrate AI solutions into enterprise workflows and content management systems.</li>
      <li>Design predictive machine learning solutions and automation pipelines for business applications.</li>
    </ul>
  </div>
  
  <h3>Research</h3>
  <div class="experience-item">
    <div class="position-title">Research Assistant</div>
    <div class="position-org">Kuwait University, Kuwait | June 2025 – Present</div>
    <p>Conducting research in machine learning, healthcare AI, wearable sensing, and scientific machine learning under multiple funded research initiatives.</p>
    <div class="position-meta"><strong>Project 1: Heat Stress Prediction using Wearable Sensors</strong></div>
    <ul class="position-bullets">
      <li>Develop machine learning models for real-time heat stress prediction using physiological and environmental data collected from Bangle.js 2 wearable devices.</li>
      <li>Investigate the relationship between environmental conditions, physiological responses, and heat-related risks in hot-arid climates.</li>
      <li>Conduct literature reviews and contribute to manuscript preparation for journal and conference publications.</li>
      <li>An initial abstract based on this work was presented at the Kuwait International Conference on Life Sciences (KICLS 2025).</li>
    </ul>
    <div class="position-meta"><strong>Project 2: Modeling Ultrasound Waves using Physics-Informed ResNet Approximators</strong></div>
    <p><em>Research Grant: ZF01/25 | June 2026 – Present</em></p>
    <ul class="position-bullets">
      <li>Develop Physics-Informed Neural Networks (PINNs) and ResNet-based surrogate models for ultrasound wave propagation governed by partial differential equations (PDEs).</li>
      <li>Benchmark deep learning approximators against traditional Finite Difference Method (FDM) simulations.</li>
      <li>Extend modeling approaches toward realistic skull-image domains for biomedical ultrasound applications.</li>
      <li>Develop reproducible machine learning workflows using Python, PyTorch, TensorFlow, version control systems, and containerized environments.</li>
      <li>Assist in experiment design, result analysis, visualization, and scientific publication preparation.</li>
    </ul>
  </div>
  
  <div class="experience-item">
    <div class="position-title">Research Assistant</div>
    <div class="position-org">North South University, Bangladesh | January 2024 – January 2025</div>
    <p><strong>Research Grant:</strong> CTRG-23-SEPS-29</p>
    <ul class="position-bullets">
      <li>Conducted research in computer vision and deep edge intelligence.</li>
      <li>Designed, trained, and optimized deep learning models for deployment on resource-constrained devices.</li>
      <li>Contributed to research projects in healthcare AI, assistive technologies, satellite imagery analysis, and computer vision applications.</li>
      <li>Participated in manuscript preparation and publication of peer-reviewed research articles.</li>
    </ul>
  </div>
  
  <h3>Teaching</h3>
  <div class="experience-item">
    <div class="position-title">Teaching Assistant</div>
    <div class="position-org">CSE311: Database Management Systems</div>
    <div class="position-org">North South University, Bangladesh | June 2023 – December 2024</div>
    <ul class="position-bullets">
      <li>Assisted in teaching SQL and database management concepts.</li>
      <li>Evaluated assignments, projects, and laboratory work.</li>
      <li>Conducted tutorial sessions and provided academic support to undergraduate students.</li>
    </ul>
  </div>
</div>

<!-- Publications Section -->
<div id="publications" class="nav-anchor"></div>
<div class="section">
  <h2>Publications</h2>
  
  <h3>Journal Articles</h3>
  <ul class="publication-list">
    <li>
      <div class="publication-ref">
        <div>
          <div class="publication-title">SatNet-B3: A Lightweight Deep Edge Intelligence Framework for Satellite Imagery Classification <a class="doi-button" href="https://doi.org/10.3390/fi17120579" target="_blank">DOI</a></div>
          <p class="publication-meta">T. Hasan, <strong>J. Anjom</strong>, Md. I. A. Hossain, and Z. U. Shamszaman — Future Internet, vol. 17, no. 12, p. 579, December 2025</p>
        </div>
      </div>
    </li>
    <li>
      <div class="publication-ref">
        <div>
          <div class="publication-title">Towards Walkable Footpath Detection for the Visually Impaired on Bangladeshi Roads with Smartphones Using Deep Edge Intelligence <a class="doi-button" href="https://doi.org/10.1016/j.array.2025.100353" target="_blank">DOI</a></div>
          <p class="publication-meta">Md. I. A. Hossain, <strong>J. Anjom</strong>, and R. I. Chowdhury — Array, July 2025</p>
        </div>
      </div>
    </li>
    <li>
      <div class="publication-ref">
        <div>
          <div class="publication-title">Leveraging deep edge intelligence for real-time respiratory disease detection <a class="doi-button" href="https://doi.org/10.1016/j.ceh.2025.01.001" target="_blank">DOI</a></div>
          <p class="publication-meta">T. T. Oishee, <strong>J. Anjom</strong>, U. Mohammed, and Md. I. A. Hossain — Clinical eHealth, January 2025</p>
        </div>
      </div>
    </li>
    <li>
      <div class="publication-ref">
        <div>
          <div class="publication-title">A Novel Edge Intelligence-based Solution for Safer Footpath Navigation of Visually Impaired Using Computer Vision <a class="doi-button" href="https://doi.org/10.1016/j.jksuci.2024.102191" target="_blank">DOI</a></div>
          <p class="publication-meta">R. I. Chowdhury, <strong>J. Anjom</strong>, and Md. I. A. Hossain — Journal of King Saud University - Computer and Information Sciences, vol. 36, no. 8, p. 102191, September 2024</p>
        </div>
      </div>
    </li>
  </ul>
  
  <h3>Conference Proceedings</h3>
  <ul class="publication-list">
    <li>
      <div class="publication-ref">
        <div>
          <div class="publication-title">An Embedded Real-time Object Alert System for Visually Impaired: A Monocular Depth Estimation based Approach through Computer Vision <a class="doi-button" href="https://doi.org/10.48550/arXiv.2507.08165" target="_blank">arXiv</a></div>
          <p class="publication-meta"><strong>J. Anjom</strong>, R. I. Chowdhury, T. Hasan, and Md. I. A. Hossain — Accepted at 2025 IEEE International Conference on Advanced Computing Technologies (ICoACT-2025)</p>
        </div>
      </div>
    </li>
    <li>
      <div class="publication-ref">
        <div>
          <div class="publication-title">Diabetic Retinopathy Detection Using a Lightweight Edge Intelligence‑based Technique <a class="doi-button" href="https://doi.org/10.1109/BECITHCON64160.2024.10962647" target="_blank">DOI</a></div>
          <p class="publication-meta">M. N. Mantaqa, <strong>J. Anjom</strong>, and Md. I. A. Hossain — 2024 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON 2024), November 2024</p>
        </div>
      </div>
    </li>
  </ul>
  
  <h3>Thesis</h3>
  <ul class="publication-list">
    <li>
      <div class="publication-ref">
        <div>
          <div class="publication-title">Visualization of Sorting Algorithms on a Mobile Application - A Study on Traditional vs Interactive Digital Tools <a class="doi-button" href="https://doi.org/10.13140/RG.2.2.12458.17602" target="_blank">DOI</a></div>
          <p class="publication-meta"><strong>J. Anjom</strong>, Tahiya Tasneem Oishee, and Uzma Mohammed — CSE499 Capstone Project, North South University, Bangladesh, December 2024</p>
        </div>
      </div>
    </li>
  </ul>
</div>

<!-- Footer -->
<div style="text-align: center; margin-top: 20px; padding-top: 30px; border-top: 1px solid #e0e0e0; color: #999; font-size: 0.9em;">
  <p>Last updated: June 2026</p>
</div></div></div>
