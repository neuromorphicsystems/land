---
{
    "name": "Event-CelebV",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "V2E"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Eye Tracking",
        "Facial Expression",
        "Gaze Tracking"
    ],
    "description": "Remote Eye Tracking",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Data will be made available on request",
        "dataset_links": []
    },
    "paper": {
        "title": "An Adaptive Learning Framework for Event-Based Remote Eye Tracking",
        "doi": "10.1016/j.eswa.2025.128038",
        "authors": [
            "Donghwa Kang",
            "Dongwoo Kang"
        ],
        "abstract": "Event cameras are next-generation asynchronous image sensors that detect only changes in light intensity. Because event cameras can capture fast-moving objects without motion blur, they have gained attention as a suitable technology for tracking the human eye, the fastest-moving part of the body. While there has been significant progress in near-range eye tracking, event-based remote eye tracking is still in its early stages due to the challenge of limited spatial information, resulting in fewer studies in this area. In this paper, we propose a novel framework for remote eye tracking using event cameras, incorporating the application of artificial intelligence (AI). Our framework addresses the challenge of limited remote eye tracking datasets by transforming frame video into event streams and generating eye annotations. We also select optimal eye keypoints suitable for event-based tracking and predict their displacement using an event-based feature tracking network. The method detects initial keypoints from a single frame, generates a reference patch, and combines it with event patches for event feature tracking. To validate our model, we conducted comprehensive evaluations on a self-collected dataset, which includes various face angles and lighting conditions, including low light environments. Our proposed method achieves a feature age of 0.550 and an expected feature age of 0.549, demonstrating promising results for event-based remote eye tracking.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-27T06:56:02.749205"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.sciencedirect.com/science/article/abs/pii/S0957417425016598"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "CelebV-HQ",
        "num_subjects": "5",
        "num_classes": "2",
        "recording_duration": "10 seconds",
        "stereo": false
    },
    "bibtex": {
        "keywords": "Event camera, Event-based remote eye tracking, Feature tracking, Synthetic event generation, Application of artificial intelligence (AI)",
        "author": "Donghwa Kang and Dongwoo Kang",
        "url": "https://www.sciencedirect.com/science/article/pii/S0957417425016598",
        "doi": "https://doi.org/10.1016/j.eswa.2025.128038",
        "issn": "0957-4174",
        "year": 2025,
        "pages": "128038",
        "volume": "286",
        "journal": "Expert Systems with Applications",
        "title": "An adaptive learning framework for event-based remote eye tracking",
        "type": "article",
        "key": "KANG2025128038"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TVCG.2021.3067784",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2020.2973049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMC.2019.2962764",
            "source": "crossref"
        },
        {
            "doi": "10.3389/frobt.2024.1326670",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2016.03.011",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.3758/s13428-016-0762-9",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2023.103750",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2004.07.013",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10845-021-01887-9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2023.3343152",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2024.3354373",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3110644",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2023.3312190",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2021.3067765",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00587",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00309",
            "source": "crossref"
        },
        {
            "doi": "10.1117/1.JBO.23.3.035001",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10055-023-00903-y",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2004.07.010",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1080/17470210902816461",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2023.3297500",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.03.019",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2024.3395484",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.jneumeth.2019.05.016",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-024-02036-4",
            "source": "crossref"
        },
        {
            "title": "Haste: Multi-hypothesis asynchronous speeded-up tracking of events",
            "source": "crossref"
        },
        {
            "title": "Event-based near-eye gaze tracking beyond 10,000 Hz",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic event-based facial expression recognition",
            "source": "crossref"
        },
        {
            "title": "EDDD: Event-based drowsiness driving detection through facial motion analysis with neuromorphic vision sensor",
            "source": "crossref"
        },
        {
            "title": "3ET: Efficient event-based eye tracking using a change-based convLSTM network",
            "source": "crossref"
        },
        {
            "title": "Learning phrase representations using RNN encoder-decoder for statistical machine translation",
            "source": "crossref"
        },
        {
            "title": "Object detection with spiking neural networks on automotive event data",
            "source": "crossref"
        },
        {
            "title": "RetinaFace: Single-shot multi-level face localisation in the wild",
            "source": "crossref"
        },
        {
            "title": "An image is worth 16x16 words: Transformers for image recognition at scale",
            "source": "crossref"
        },
        {
            "title": "GazMon: Eye gazing enabled driving behavior monitoring and prediction",
            "source": "crossref"
        },
        {
            "title": "Real-time gaze tracking with event-driven eye segmentation",
            "source": "crossref"
        },
        {
            "title": "Wing loss for robust facial landmark localisation with convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "5.10 a 1280\u00d7720 back-illuminated stacked temporal contrast event-based vision sensor with 4.86 \u00b5m pixels, 1.066 GEPS readout, programmable event-rate controller and compressive data-formatting pipeline",
            "source": "crossref"
        },
        {
            "title": "A scoping review of gaze and eye tracking-based control methods for assistive robotic arms",
            "source": "crossref"
        },
        {
            "title": "Eye blink detection based on motion vectors analysis",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "EKLT: Asynchronous photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Real-time 3d glint detection in remote eye tracking based on Bayesian inference",
            "source": "crossref"
        },
        {
            "title": "Evaluation of the Tobii EyeX Eye tracking controller and Matlab toolkit for research",
            "source": "crossref"
        },
        {
            "title": "MAL-Net: Multiscale attention link network for accurate eye center detection",
            "source": "crossref"
        },
        {
            "title": "Eye tracking in the wild",
            "source": "crossref"
        },
        {
            "title": "v2e: From video frames to realistic DVS events",
            "source": "crossref"
        },
        {
            "title": "Real-time grasping strategies using event camera",
            "source": "crossref"
        },
        {
            "title": "ADNet: Leveraging error-bias towards normal direction in face alignment",
            "source": "crossref"
        },
        {
            "title": "Event camera-based pupil localization: Facilitating training with event-style translation of RGB faces",
            "source": "crossref"
        },
        {
            "title": "Head pose-aware regression for pupil localization from a-pillar cameras",
            "source": "crossref"
        },
        {
            "title": "Real-time eye tracking for bare and sunglasses-wearing faces for augmented reality 3D head-up displays",
            "source": "crossref"
        },
        {
            "title": "Neuromorphic driver monitoring systems: A proof-of-concept for yawn detection and seatbelt state detection using an event camera",
            "source": "crossref"
        },
        {
            "title": "EllSeg: An ellipse segmentation framework for robust gaze tracking",
            "source": "crossref"
        },
        {
            "title": "Low-latency visual odometry using event-based feature tracks",
            "source": "crossref"
        },
        {
            "title": "Event-based face detection and tracking using the dynamics of eye blinks",
            "source": "crossref"
        },
        {
            "title": "CIFAR10-DVS: An event-stream dataset for object classification",
            "source": "crossref"
        },
        {
            "title": "Feature pyramid networks for object detection",
            "source": "crossref"
        },
        {
            "title": "Fapnet: An effective frequency adaptive point-based eye tracker",
            "source": "crossref"
        },
        {
            "title": "Data-driven feature tracking for event cameras",
            "source": "crossref"
        },
        {
            "title": "Robust eye tracking based on multiple corneal reflections for clinical applications",
            "source": "crossref"
        },
        {
            "title": "Eye-tracking on virtual reality: a survey",
            "source": "crossref"
        },
        {
            "title": "Eye gaze tracking techniques for interactive applications",
            "source": "crossref"
        },
        {
            "title": "Converting static image datasets to spiking neuromorphic datasets using saccades",
            "source": "crossref"
        },
        {
            "title": "A QVGA 143 dB dynamic range frame-free PWM image sensor with lossless pixel-level video compression and time-domain CDS",
            "source": "crossref"
        },
        {
            "title": "The 35th sir frederick bartlett lecture: Eye movements and attention in reading, scene perception, and visual search",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "A simple and effective point-based network for event camera 6-DOFs pose relocalization",
            "source": "crossref"
        },
        {
            "title": "Real-time multi-task facial analytics with event cameras",
            "source": "crossref"
        },
        {
            "title": "Real-time face & eye tracking and blink detection using event cameras",
            "source": "crossref"
        },
        {
            "title": "AEGNN: Asynchronous event-based graph neural networks",
            "source": "crossref"
        },
        {
            "title": "Robust feature tracking in DVS event stream using bezier mapping",
            "source": "crossref"
        },
        {
            "title": "Convolutional LSTM network: A machine learning approach for precipitation nowcasting",
            "source": "crossref"
        },
        {
            "title": "Event-based kilohertz eye tracking using coded differential lighting",
            "source": "crossref"
        },
        {
            "title": "Front and back illuminated dynamic and active pixel vision sensors comparison",
            "source": "crossref"
        },
        {
            "title": "Event-based high dynamic range image and very high frame rate video generation using conditional generative adversarial networks",
            "source": "crossref"
        },
        {
            "title": "Event-based eye tracking. AIS 2024 challenge survey",
            "source": "crossref"
        },
        {
            "title": "MambaPupil: Bidirectional selective recurrent model for event-based eye tracking",
            "source": "crossref"
        },
        {
            "title": "FlyTracker: Motion tracking and obstacle detection for drones using event cameras",
            "source": "crossref"
        },
        {
            "title": "Sparse local patch transformer for robust face alignment and landmarks inherent relation learning",
            "source": "crossref"
        },
        {
            "title": "OoD-bench: Quantifying and understanding two dimensions of out-of-distribution generalization",
            "source": "crossref"
        },
        {
            "title": "OoD-control: Generalizing control in unseen environments",
            "source": "crossref"
        },
        {
            "title": "DeepVOG: Open-source pupil segmentation and gaze estimation in neuroscience using deep learning",
            "source": "crossref"
        },
        {
            "title": "Revisiting motion information for RGB-event tracking with MOT philosophy",
            "source": "crossref"
        },
        {
            "title": "Star loss: Reducing semantic ambiguity in facial landmark detection",
            "source": "crossref"
        },
        {
            "title": "Celebv-HQ: A large-scale video facial attributes dataset",
            "source": "crossref"
        },
        {
            "title": "Visual prompt multi-modal tracking",
            "source": "crossref"
        },
        {
            "title": "Vision-language alignment learning under affinity and divergence principles for few-shot out-of-distribution generalization",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Simulated data was converted from the CelebV-HQ (https://doi.org/10.1007/978-3-031-20071-7_38) dataset
- Real-world dataset was collected consisting of 5 under 2 different lighting conditions and with an average duration of 10 seconds.
-
