---
{
    "name": "EventAid",
    "aliases": [
        "EVENTAID-R",
        "EVENTAID-B",
        "EVENTAID-S",
        "EVENTAID-D",
        "EVENTAID-F",
        "EVENTAID-V2E",
        "EVENTAID-VM"
    ],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4",
        "V2E",
        "DVS-Voltmeter"
    ],
    "other_sensors": [
        "Hikvision MV-CA050-12UC RGB camera"
    ],
    "category": "Benchmarking, SNN Training Task, and SNN Training",
    "subcategory": [
        "Beamsplitters",
        "De-blurring",
        "Sim-to-Real",
        "HDR Video Reconstruction",
        "High-Speed Video Reconstruction",
        "Super-resolution"
    ],
    "task": "Benchmarking datasets",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Dropbox"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/7l4jytyqpvdf5w9x3t8zi/AJS8Vp5w5CfCxwvpdl20Qv0?rlkey=aq4t4jg5xerfrhfkut6tddh5w&st=ebms08n3&dl=0",
                "format": "CSV",
                "available": false
            }
        ],
        "size_gb": 23.58,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EventAid: Benchmarking Event-aided Image/Video Enhancement Algorithms with Real-captured Hybrid Dataset",
        "doi": "10.48550/arXiv.2312.08220",
        "authors": [
            "Peiqi Duan",
            "Boyu Li",
            "Yixin Yang",
            "Hanyue Lou",
            "Minggui Teng",
            "Yi Ma",
            "Boxin Shi"
        ],
        "abstract": "Event cameras are emerging imaging technology that offers advantages over conventional frame-based imaging sensors in dynamic range and sensing speed. Complementing the rich texture and color perception of traditional image frames, the hybrid camera system of event and frame-based cameras enables high-performance imaging. With the assistance of event cameras, high-quality image/video enhancement methods make it possible to break the limits of traditional frame-based cameras, especially exposure time, resolution, dynamic range, and frame rate limits. This paper focuses on five event-aided image and video enhancement tasks (i.e., event-based video reconstruction, event-aided high frame rate video reconstruction, image deblurring, image super-resolution, and high dynamic range image reconstruction), provides an analysis of the effects of different event properties, a real-captured and ground truth labeled benchmark dataset, a unified benchmarking of state-of-the-art methods, and an evaluation for two mainstream event simulators. In detail, this paper collects a real-captured evaluation dataset EventAid for five event-aided image/video enhancement tasks, by using \"Event-RGB\" multi-camera hybrid system, taking into account scene diversity and spatiotemporal synchronization. We further perform quantitative and visual comparisons for state-of-the-art algorithms, provide a controlled experiment to analyze the performance limit of event-aided image deblurring methods, and discuss open problems to inspire future research.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "Google Scholar",
            "count": 1,
            "updated": "2025-01-06 16:00:09.343852"
        },
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-06-12T09:51:29.088538"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2312.08220"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2312.08220"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/EventAid-benchmark"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2312.08220 [cs]",
        "year": 2023,
        "month": "dec",
        "author": "Duan, Peiqi and Li, Boyu and Yang, Yixin and Lou, Hanyue and Teng, Minggui and Ma, Yi and Shi, Boxin",
        "publisher": "arXiv",
        "urldate": "2024-12-20",
        "language": "en",
        "doi": "10.48550/arXiv.2312.08220",
        "url": "http://arxiv.org/abs/2312.08220",
        "shorttitle": "{EventAid}",
        "title": "{EventAid}: {Benchmarking} {Event}-aided {Image}/{Video} {Enhancement} {Algorithms} with {Real}-captured {Hybrid} {Dataset}",
        "type": "misc",
        "key": "duan_eventaid_2023"
    }
}
---

### Dataset Structure

- Comprised of multiple sub-datasets:
  - Real datasets:
    - EVENTAID-R
      - 10 groups containing 58,264 frames over 405 seconds
      - 17 Gb in size
    - EVENTAID-B
      - 10 groups containing 7,436 frames over 247 seconds
        -8.4 Gb in size
    - EVENTAID-S containing 10 groups totalling 11,265 frames and 375 seconds
  - EVENTAID-D:
    \- 5 groups containing 4,353 frames over 107 seconds
    \- 6.18 Gb in size
  - EVENTAID-F
    - 16.88 Gb in size
  - EVENTAID-S
    - 12.2 Gb in size
  - Simulated datasets:
    - EVENTAID-V2E - Converted using the v2e simulator
    - EVENTAID-VM - Converted using the DVS-Voltmeter

Total size 58.5 Gb

## Comparison Tables

#### Event-based video reconstruction

| Dataset name                         | Real/Simulated | Input image | Input events | Ground truth | Spatial matching           | Temporal synchronization  | Camera model   | EBS Spatial resolution | RGB Spatial resolution | Color / gray | Frame rate | Indoor+ Outdoor | Ego+ Local motion | Slow+ Fast motion | High texture |
| ------------------------------------ | -------------- | ----------- | ------------ | ------------ | -------------------------- | ------------------------- | -------------- | ---------------------- | ---------------------- | ------------ | ---------- | --------------- | ----------------- | ----------------- | ------------ |
| \[[EventNFS]\]                       | Simulated      | -           | ✓            | X            | Display+camera calibration | Mark points matching      | DAVIS346 mono  | 222×124                | 222×124                | color        | -          | ✓               | ✓                 | ✓                 | ✓            |
| \[[The Event-Based Camera Dataset]\] | Real           | -           | ✓            | ✓            | Frame+event sensor         | Chip synchronization      | DAVIS240       | 240×180                | 240×180                | gray         | ∼24 FPS    | ✓               | ✓                 | ✓                 | ✓            |
| \[[HQF]\]                            | Real           | -           | ✓            | ✓            | Frame+event sensor         | Chip synchronization      | DAVIS240       | 240×180                | 240×180                | gray         | < 30 FPS   | ✓               | ✓                 | ✓                 | ✓            |
| \[[DVS-Dark]\]                       | Real           | -           | ✓            | ✓            | Frame+event sensor         | Chip synchronization      | DAVIS240       | 240×180                | 240×180                | gray         | < 30 FPS   | ✓               | X                 | X                 | X            |
| \[[MVSEC]\]                          | Real           | -           | ✓            | ✓            | Frame+event sensor         | Chip synchronization      | DAVIS346 mono  | 346×260                | 346×260                | gray         | 50 FPS     | ✓               | ✓                 | ✓                 | X            |
| \[[CED]\]                            | Real           | -           | ✓            | ✓            | Frame+event sensor         | Chip synchronization      | DAVIS346 color | 346×260                | 346×260                | color        | < 50 FPS   | ✓               | ✓                 | X                 | X            |
| \[[EventAid]\] (EventAid-R)          | Real           | -           | ✓            | ✓            | Beam splitter              | External clock triggering | Prophesee      | ∼954×636               | ∼954×636               | color        | 150 FPS    | ✓               | ✓                 | ✓                 | ✓            |

#### Event-aided high frame rate video reconstruction

| Dataset name                | Real/Simulated | Input image | Input events | Ground truth | Spatial matching   | Temporal synchronization  | Camera model | EBS Spatial resolution | RGB Spatial resolution | Color / gray | Frame rate | Indoor+ Outdoor | Ego+ Local motion | Slow+ Fast motion | High texture |
| --------------------------- | -------------- | ----------- | ------------ | ------------ | ------------------ | ------------------------- | ------------ | ---------------------- | ---------------------- | ------------ | ---------- | --------------- | ----------------- | ----------------- | ------------ |
| Tulyakov et al. [31]        | Simulated      | ✓           | X            | ✓            | -                  | -                         | Simulation   | 1280×720               | 1280×720               | color        | -          | ✓               | ✓                 | ✓                 | ✓            |
| \[[Wang2020]\]              | Simulated      | ✓           | X            | ✓            | -                  | -                         | Simulation   | 1280×720               | 1280×720               | color        | 240 FPS    | ✓               | ✓                 | ✓                 | ✓            |
| SloMo-DVS [50]              | Real           | ✓           | ✓            | ✓            | Frame+event sensor | Chip synchronization      | DAVIS240     | 240×180                | 240×180                | gray         | < 30 FPS   | ✓               | ✓                 | ✓                 | ✓            |
| GEF [30]                    | Real           | ✓           | ✓            | ✓            | Beam splitter      | Mark points matching      | DAVIS240     | 190×180                | 1520×1440              | color        | 20 FPS     | ✓               | ✓                 | X                 | ✓            |
| HS-ERGB [31]                | Real           | ✓           | ✓            | ✓            | Dual camera setup  | External clock triggering | Prophesee    | ∼900×800               | ∼900×800               | color        | 226 FPS    | ✓               | ✓                 | ✓                 | ✓            |
| \[[BS-ERGB]\]               | Real           | ✓           | ✓            | ✓            | Beam splitter      | External clock triggering | Prophesee    | 970×625                | 970×625                | color        | 28 FPS     | ✓               | ✓                 | ✓                 | ✓            |
| \[[EventAid]\] (EventAid-F) | Real           | ✓           | ✓            | ✓            | Beam splitter      | External clock triggering | Prophesee    | ∼954×636               | ∼954×636               | color        | 150 FPS    | ✓               | ✓                 | ✓                 | ✓            |

[31] Time lens: Event-based video frame interpolation S Tulyakov, D Gehrig, S Georgoulis, J Erbach… - Proceedings of the IEEE …, 2021

[50] Training weakly supervised video frame interpolation with events
Z Yu, Y Zhang, D Liu, D Zou, X Chen, Y Liu, JS Ren - Proceedings of the IEEE/CVF …, 2021

[30] Guided event filtering: Synergy between intensity images and neuromorphic events for high performance imaging P Duan, ZW Wang, B Shi, O Cossairt, T Huang… - IEEE Transactions on …, 2021

#### Event-aided image deblurring

| Dataset name                | Real/Simulated | Input image | Input events | Ground truth | Spatial matching         | Temporal synchronization  | Camera model   | EBS Spatial resolution | RGB Spatial resolution | Color / gray | Frame rate | Indoor+ Outdoor | Ego+ Local motion | Slow+ Fast motion | High texture |
| --------------------------- | -------------- | ----------- | ------------ | ------------ | ------------------------ | ------------------------- | -------------- | ---------------------- | ---------------------- | ------------ | ---------- | --------------- | ----------------- | ----------------- | ------------ |
| \[[Blurry Event Dataset]\]  | Simulated      | X           | X            | ✓            | -                        | -                         | Simulation     | 1280×720               | 1280×720               | color        | ∼34 FPS    | ✓               | ✓                 | ✓                 | ✓            |
| \[[Blur-DVS ]\]             | Simulated      | X           | ✓            | ✓            | Frame+event sensor       | Chip synchronization      | DAVIS240       | 240×180                | 240×180                | gray         | ∼4 FPS     | X               | ✓                 | X                 | ✓            |
| \[[RBE]\]                   | Simulated      | X           | ✓            | ✓            | Frame+event sensor       | Chip synchronization      | DAVIS240       | 240×180                | 240×180                | gray         | ∼4 FPS     | X               | ✓                 | ✓                 | X            |
| \[[RealSharp-DAVIS]\]       | Simulated      | X           | ✓            | ✓            | Frame+event sensor       | Chip synchronization      | DAVIS346 color | 346×260                | 346×260                | color        | ∼3 FPS     | ✓               | X                 | X                 | X            |
| \[[REBlur]\]                | Real           | ✓           | ✓            | ✓            | Repetitive motion scenes | Mark points matching      | DAVIS346 mono  | 346×260                | 346×260                | gray         | < 50 FPS   | X               | X                 | ✓                 | X            |
| \[[EventAid]\] (EventAid-B) | Real           | ✓           | ✓            | ✓            | Beam splitter            | External clock triggering | Prophesee      | ∼835×620               | ∼835×620               | color        | 30 FPS     | ✓               | ✓                 | ✓                 | ✓            |

#### Event-aided image super resolution

| Dataset name                   | Real/Simulated | Input image | Input events | Ground truth | Spatial matching | Temporal synchronization  | Camera model | EBS Spatial resolution | RGB Spatial resolution | Color / gray | Frame rate | Indoor+ Outdoor | Ego+ Local motion | Slow+ Fast motion | High texture |
| ------------------------------ | -------------- | ----------- | ------------ | ------------ | ---------------- | ------------------------- | ------------ | ---------------------- | ---------------------- | ------------ | ---------- | --------------- | ----------------- | ----------------- | ------------ |
| ESC [53]                       | Simulated      | X           | X            | ✓            | -                | -                         | Simulation   | 128×128                | 512×512                | gray         | -          | ✓               | ✓                 | ✓                 | ✓            |
| GoPro+V2E [54]                 | Simulated      | X           | X            | ✓            | -                | -                         | Simulation   | 320×180                | 1280×720               | color        | -          | ✓               | ✓                 | ✓                 | ✓            |
| \[[Wang2020]\]                 | Simulated      | X           | X            | ✓            | -                | -                         | Simulation   | 320×180                | 1280×720               | gray         | -          | ✓               | ✓                 | ✓                 | ✓            |
| \[[EventAid]\]<br>(EventAid-S) | Real           | X           | ✓            | ✓            | Beam splitter    | External clock triggering | Prophesee    | 1270×710               | 2540×1420              | color        | 30 FPS     | ✓               | ✓                 | ✓                 | ✓            |

[53] Learning to super resolve intensity images from events J Choi, KJ Yoon - Proceedings of the IEEE/CVF Conference on Computer …, 2020

[54] Evintsr-net: Event guided multiple latent frames reconstruction and super-resolution - J Han, Y Yang, C Zhou, C Xu, B Shi - Proceedings of the IEEE/CVF International …, 2021

#### Event-aided high dynamic range image reconstruction

| Dataset name                | Real/Simulated | Input image | Input events | Ground truth | Spatial matching | Temporal synchronization  | Camera model   | EBS Spatial resolution | RGB Spatial resolution | Color / gray | Frame rate | Indoor+ Outdoor | Ego+ Local motion | Slow+ Fast motion | High texture |
| --------------------------- | -------------- | ----------- | ------------ | ------------ | ---------------- | ------------------------- | -------------- | ---------------------- | ---------------------- | ------------ | ---------- | --------------- | ----------------- | ----------------- | ------------ |
| Yang et al. [40]            | Simulated      | X           | X            | ✓            | -                | -                         | Simulation     | 256×256                | 256×256                | color        | -          | ✓               | X                 | X                 | ✓            |
| Han et al. [36]             | Real           | ✓           | ✓            | X            | Beam splitter    | Mark points matching      | DAVIS240       | 240×180                | 1520×1440              | color        | 20 FPS     | ✓               | ✓                 | X                 | X            |
| \[[HES-HDR]\]               | Real           | ✓           | ✓            | X            | Beam splitter    | Mark points matching      | DAVIS346 mono  | 329×237                | 2032×1446              | color        | 20 FPS     | ✓               | ✓                 | X                 | ✓            |
| Yang et al. [40]            | Real           | ✓           | ✓            | X            | Beam splitter    | Mark points matching      | DAVIS346 color | 346×260                | 346×260                | color        | ∼10 FPS    | X               | X                 | X                 | ✓            |
| \[[EventAid]\] (EventAid-D) | Real           | ✓           | ✓            | Reference    | Beam splitter    | External clock triggering | Prophesee      | ∼800×500               | ∼800×500               | color        | 30 FPS     | ✓               | ✓                 | ✓                 | ✓            |

[40] Learning event guided high dynamic range video reconstruction Y Yang, J Han, J Liang, I Sato, B Shi - Proceedings of the IEEE/CVF Conference on …, 2023

[36] Neuromorphic camera guided high dynamic range imaging
J Han, C Zhou, P Duan, Y Tang, C Xu, C Xu, T Huang… - Proceedings of the IEEE …, 2020
