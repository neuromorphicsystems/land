---
{
    "name": "ArDVS100",
    "aliases": [
        "Real-ArDVS10",
        "TemArDVS100"
    ],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Human Action Recognition"
    ],
    "description": "Long-term Action Recognition",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Dataset link is not yet provided on project page.",
        "dataset_links": []
    },
    "paper": {
        "title": "Path-adaptive Spatio-Temporal State Space Model for Event-based Recognition with Arbitrary Duration",
        "doi": "10.48550/arXiv.2409.16953",
        "authors": [
            "Jiazhou Zhou",
            "Kanghao Chen",
            "Lei Zhang",
            "Lin Wang"
        ],
        "abstract": "Event cameras are bio-inspired sensors that capture the intensity changes asynchronously and output event streams with distinct advantages, such as high temporal resolution. To exploit event cameras for object/action recognition, existing methods predominantly sample and aggregate events in a second-level duration at every fixed temporal interval (or frequency). However, they often face difficulties in capturing the spatiotemporal relationships for longer, e.g., minute-level, events and generalizing across varying temporal frequencies. To fill the gap, we present a novel framework, dubbed PAST-SSM, exhibiting superior capacity in recognizing events with arbitrary duration (e.g., 0.1s to 4.5s) and generalizing to varying inference frequencies. Our key insight is to learn the spatiotemporal relationships from the encoded event features via the state space model (SSM) -- whose linear complexity makes it ideal for modeling high temporal resolution events with longer sequences. To achieve this goal, we first propose a Path-Adaptive Event Aggregation and Scan (PEAS) module to encode events of varying duration into features with fixed dimensions by adaptively scanning and selecting aggregated event frames. On top of PEAS, we introduce a novel Multi-faceted Selection Guiding (MSG) loss to minimize the randomness and redundancy of the encoded features. This subtly enhances the model generalization across different inference frequencies. Lastly, the SSM is employed to better learn the spatiotemporal properties from the encoded features. Moreover, we build a minute-level event-based recognition dataset, named ArDVS100, with arbitrary duration for the benefit of the community. Extensive experiments prove that our method outperforms prior arts by +3.45%, +0.38% and +8.31% on the DVS Action, SeAct and HARDVS datasets, respectively.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2409.16953"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2409.16953"
        },
        {
            "type": "project_page",
            "url": "https://vlislab22.github.io/pastssm/"
        }
    ],
    "full_name": "Arbitrary Duration DVS (ArDVS)",
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2409.16953 [cs]",
        "year": 2024,
        "month": "sep",
        "author": "Zhou, Jiazhou and Chen, Kanghao and Zhang, Lei and Wang, Lin",
        "publisher": "arXiv",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.48550/arXiv.2409.16953",
        "url": "http://arxiv.org/abs/2409.16953",
        "title": "Path-adaptive {Spatio}-{Temporal} {State} {Space} {Model} for {Event}-based {Recognition} with {Arbitrary} {Duration}",
        "type": "misc",
        "key": "zhou_path-adaptive_2024"
    }
}
---

### Dataset Structure

- Consists of two synthesised datasets and one real dataset:
  - \[[ArDVS100]\]:
    - Durations: 1s to 256s
    - Classes: 100
    - Created from \[[HARDVS]\]
  - TemArDVS100:
    - Durations: 14s to 215s
    - Classes 100
    - Created from \[[HARDVS]\] and \[[DailyDVS-200]\]
  - Real-ArDVS10:
    - Duration: 2s to 75s
    - Classes: 10

### Comparison Table

| Dataset       | Year | Sensors        | Object | Scale     | Class | Real | Temporal Fine-grained Labels | Duration(s) |
| ------------- | ---- | -------------- | ------ | --------- | ----- | ---- | ---------------------------- | ----------- |
| MNISTDVS      | 2013 | DAVIS128       | Image  | 30,000    | 10    | ✗    | ✗                            | –           |
| N-Caltech101  | 2015 | ATIS           | Image  | 8,709     | 101   | ✗    | ✗                            | 0.3s        |
| N-MNIST       | 2015 | ATIS           | Image  | 70,000    | 10    | ✗    | ✗                            | 0.3s        |
| CIFAR10-DVS   | 2017 | DAVIS128       | Image  | 10,000    | 10    | ✗    | ✗                            | 1.2s        |
| N-ImageNet    | 2021 | Samsung-Gen3   | Image  | 1,781,167 | 1,000 | ✗    | ✗                            | 0.1s        |
| ES-ImageNet   | 2021 | –              | Image  | 1,306,916 | 1,000 | ✗    | ✗                            | –           |
| ASLAN-DVS     | 2011 | DAVIS240c      | Action | 3,697     | 432   | ✗    | ✗                            | –           |
| DvsGesture    | 2017 | DAVIS128       | Action | 1,342     | 11    | ✓    | ✓                            | 6s          |
| N-CARS        | 2018 | ATIS           | Car    | 24,029    | 2     | ✓    | ✗                            | 0.1s        |
| ASL-DVS       | 2019 | DAVIS240       | Hand   | 100,800   | 24    | ✓    | ✗                            | 0.1s        |
| DVS Action    | 2019 | DAVIS346       | Action | 450       | 10    | ✗    | ✗                            | 5s          |
| HMDB-DVS      | 2019 | DAVIS240c      | Action | 6,766     | 51    | ✓    | ✓                            | 19s         |
| UCF-DVS       | 2019 | DAVIS240c      | Action | 13,320    | 101   | ✓    | ✓                            | 25s         |
| DailyAction   | 2021 | DAVIS346       | Action | 1,440     | 12    | ✓    | ✓                            | 10s         |
| HARDVS        | 2022 | DAVIS346       | Action | 107,646   | 300   | ✓    | ✓                            | 5s          |
| THUEACT50     | 2023 | CeleX-V        | Action | 10,500    | 50    | ✓    | ✓                            | 2s-5s       |
| THUEA50CHL    | 2023 | DAVIS346       | Action | 2,330     | 50    | ✓    | ✓                            | 2s-6s       |
| Bullying10K   | 2023 | DAVIS346       | Action | 10,000    | 10    | ✓    | ✓                            | 1s-20s      |
| SeAct         | 2024 | DAVIS346       | Action | 580       | 58    | ✓    | ✓                            | 2s-10s      |
| DailyDVS-200  | 2024 | DVXplorer Lite | Action | 22,046    | 200   | ✓    | ✓                            | 2s-20s      |
| ArDVS100      | 2024 | DAVIS346       | Action | 10,000    | 100   | ✗    | ✗                            | 1s-265s     |
| Real-ArDVS100 | 2024 | DAVIS346       | Action | 10,000    | 100   | ✓    | ✗                            | 2s-75s      |
| TemArDVS100   | 2024 | DAVIS346       | Action | 10,000    | 100   | ✗    | ✓                            | 14s-215s    |

Let me know if you need any tweaks or further formatting!
