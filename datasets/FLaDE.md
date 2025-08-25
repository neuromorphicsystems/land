---
{
    "name": "FLaDE",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Domain Specific Application",
    "tags": [
        "Flame Detection"
    ],
    "description": "Flame detection",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Data will be made available on request",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.usercontent.google.com/download?id=1orF3i8lhT26fixFRavtphPOqgD4p4lyB&authuser=0",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 12.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Hyper real-time flame detection: Dynamic insights from event cameras and FlaDE dataset",
        "doi": "10.1016/j.eswa.2024.125746",
        "authors": [
            "Saizhe Ding",
            "Haorui Zhang",
            "Yuxin Zhang",
            "Xinyan Huang",
            "Weiguo Song"
        ],
        "abstract": "Bio-inspired sensors known as event cameras offer significant advantages over traditional frame-based RGB cameras, particularly in overcoming challenges like static backgrounds, overexposure, and data redundancy. In this paper, we explore the potential of event cameras in flame detection. Firstly, we establish an open-access Flame Detection dataset based on Event Cameras (FlaDE). To mitigate noise in extreme conditions with event cameras, we then propose a denoising preprocessing module termed Recursive Event Denoiser (RED). By leveraging distinctive probability distributions between signals and noise, RED achieves 0.974 (MESR) on the E-MLB benchmark, outperforming than other statistical denoising methods. Furthermore, we delve into the physical meaning behind the event rates, enabling statistical extraction of flame amidst static background and other dynamic sources. Based on this insight, we develop the hardware-efficient BEC-SVM flame detection algorithm. Benchmarked against other prominent detection modules using the FlaDE dataset, our approach highlights the feasibility of leveraging event data for robust flame detection, achieving a detection accuracy of 96.6% (AP.50) with a processing speed of 505.7 FPS on CPU. This research contributes valuable insights for future advancements in flame detection methodologies. The implementation of the code is available at https://github.com/KugaMaxx/cocoa-flade.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-02T11:49:41.806706"
        },
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-07-02T11:49:41.458125"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://www.sciencedirect.com/science/article/pii/S0957417424026137"
        },
        {
            "type": "github_page",
            "url": "https://github.com/KugaMaxx/cocoa-flade"
        }
    ],
    "full_name": "Flame Detection dataset based on Event Cameras",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "125746",
        "year": 2024,
        "month": "nov",
        "author": "Ding, Saizhe and Zhang, Haorui and Zhang, Yuxin and Huang, Xinyan and Song, Weiguo",
        "journal": "Expert Systems with Applications",
        "urldate": "2024-11-22",
        "language": "en",
        "doi": "10.1016/j.eswa.2024.125746",
        "url": "https://linkinghub.elsevier.com/retrieve/pii/S0957417424026137",
        "shorttitle": "Hyper real-time flame detection",
        "issn": "09574174",
        "title": "Hyper real-time flame detection: {Dynamic} insights from event cameras and {FlaDE} dataset",
        "type": "article",
        "key": "ding_hyper_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.3390/s21196519",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00521-021-06848-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASE.2022.3141248",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3187266",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2004.1421401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2023.3260638",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10694-017-0683-x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2015.2392531",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1145/364099.364331",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41598-024-55232-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3152999",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s40747-024-01502-3",
            "source": "crossref"
        },
        {
            "doi": "10.3390/f14010162",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2023.3290432",
            "source": "crossref"
        },
        {
            "doi": "10.1155/2014/923609",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00371-017-1372-y",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.engfracmech.2022.108334",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eswa.2021.116114",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2013.2258353",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.jobe.2022.105154",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPCT.2014.7054883",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP40778.2020.9191114",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0734-189X(85)90016-7",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.firesaf.2017.06.012",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eswa.2023.120330",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CSAE.2012.6272943",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.firesaf.2023.103891",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10489-023-05231-x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2020.2993957",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.oceaneng.2023.116658",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSEN.2021.3139635",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eswa.2023.120465",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10694-022-01357-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CSSE.2008.837",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eswa.2023.121665",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eswa.2024.123394",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-023-01754-5",
            "source": "crossref"
        },
        {
            "title": "An improvement of the fire detection and classification method using YOLOv3 for surveillance systems",
            "source": "crossref"
        },
        {
            "title": "A new synergy of singular spectrum analysis with a conscious algorithm to detect faults in industrial robotics",
            "source": "crossref"
        },
        {
            "title": "Improvement of an industrial robotic flaw detection system",
            "source": "crossref"
        },
        {
            "title": "Event probability mask (EPM) and event denoising convolutional neural network (EDnCNN) for neuromorphic cameras",
            "source": "crossref"
        },
        {
            "title": "Fire Detection from Social Media Images by Means of Instance-Based Learning",
            "source": "crossref"
        },
        {
            "title": "A 240 \u00d7 180 130 dB 3 \u00b5s latency global shutter spatiotemporal vision sensor",
            "source": "crossref"
        },
        {
            "title": "Event-based line SLAM in real-time",
            "source": "crossref"
        },
        {
            "title": "Research on Image Fire Detection Based on Support Vector Machine",
            "source": "crossref"
        },
        {
            "title": "BoWFire: Detection of Fire in Still Images by Integrating Pixel Color and Texture Analysis",
            "source": "crossref"
        },
        {
            "title": "E-MLB: Multilevel benchmark for event-based camera denoising",
            "source": "crossref"
        },
        {
            "title": "Guided event filtering: synergy between intensity images and neuromorphic events for high performance imaging",
            "source": "crossref"
        },
        {
            "title": "EventZoom: Learning to denoise and super resolve neuromorphic events",
            "source": "crossref"
        },
        {
            "title": "An efficient method for vision-based fire detection using SVM classification",
            "source": "crossref"
        },
        {
            "title": "Efficient flame detection based on static and dynamic texture analysis in forest fire detection",
            "source": "crossref"
        },
        {
            "title": "Real-time fire detection for video-surveillance applications using a combination of experts based on color, shape, and motion",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "An improved equivalence algorithm",
            "source": "crossref"
        },
        {
            "title": "YOLOFM: An improved fire and smoke object detection algorithm based on YOLOv5n",
            "source": "crossref"
        },
        {
            "title": "Low cost and latency event camera background activity denoising",
            "source": "crossref"
        },
        {
            "title": "Intelligent optimization of steam gasification catalysts for palm oil waste using support vector machine and adaptive transition marine predator algorithm",
            "source": "crossref"
        },
        {
            "title": "A small-target forest fire smoke detection model based on deformable transformer for end-to-end object detection",
            "source": "crossref"
        },
        {
            "title": "Flame detection method based on improved YOLO-v3",
            "source": "crossref"
        },
        {
            "title": "Event-based low-illumination image enhancement",
            "source": "crossref"
        },
        {
            "title": "O(N)-space spatiotemporal filter for reducing noise in neuromorphic vision sensors",
            "source": "crossref"
        },
        {
            "title": "RGB color model based the fire detection algorithm in video sequences on wireless sensor network",
            "source": "crossref"
        },
        {
            "title": "Bio-inspired Stereo Vision System with Silicon Retina Imagers",
            "source": "crossref"
        },
        {
            "title": "HOTS: A hierarchy of event-based time-surfaces for pattern recognition",
            "source": "crossref"
        },
        {
            "title": "A Lightweight Convolutional Neural Network Flame Detection Algorithm",
            "source": "crossref"
        },
        {
            "title": "Coherent event guided low-light video enhancement",
            "source": "crossref"
        },
        {
            "title": "Autofocus for event cameras",
            "source": "crossref"
        },
        {
            "title": "Design of a spatiotemporal correlation filter for event-based sensors",
            "source": "crossref"
        },
        {
            "title": "High-speed video generation with an event camera",
            "source": "crossref"
        },
        {
            "title": "SSD: Single Shot MultiBox Detector",
            "source": "crossref"
        },
        {
            "title": "Prediction of Mode-I rock fracture toughness using support vector regression with metaheuristic optimization algorithms",
            "source": "crossref"
        },
        {
            "title": "Attention based CNN model for fire detection and localization in real-world images",
            "source": "crossref"
        },
        {
            "title": "Optical flow estimation for flame detection in videos",
            "source": "crossref"
        },
        {
            "title": "Indoor fire detection utilizing computer vision-based strategies",
            "source": "crossref"
        },
        {
            "title": "A new edge detection algorithm for flame image processing",
            "source": "crossref"
        },
        {
            "title": "Topological structural analysis of digitized binary images by border following",
            "source": "crossref"
        },
        {
            "title": "Revolutionizing flame detection: Novelization in flame detection through transferring distillation for knowledge to pruned model",
            "source": "crossref"
        },
        {
            "title": "Computer vision for wildfire research: An evolving image dataset for processing and analysis",
            "source": "crossref"
        },
        {
            "title": "Learning precise feature via self-attention and self-cooperation YOLOX for smoke detection",
            "source": "crossref"
        },
        {
            "title": "EV-Gait: Event-based robust gait recognition using dynamic vision sensors",
            "source": "crossref"
        },
        {
            "title": "Automatic real-time fire distance, size and power measurement driven by stereo camera and deep learning",
            "source": "crossref"
        },
        {
            "title": "Explainable deep learning for image-driven fire calorimetry",
            "source": "crossref"
        },
        {
            "title": "Event-based 3D SLAM with a depth-augmented dynamic vision sensor",
            "source": "crossref"
        },
        {
            "title": "Probabilistic undirected graph based denoising method for dynamic vision sensor",
            "source": "crossref"
        },
        {
            "title": "Real-time spatiotemporal forecast of natural gas jet fire from offshore platform by using deep probability learning",
            "source": "crossref"
        },
        {
            "title": "DVS image noise removal using K-SVD method",
            "source": "crossref"
        },
        {
            "title": "Motion deblurring with real events",
            "source": "crossref"
        },
        {
            "title": "Adaptive event address map denoising for event cameras",
            "source": "crossref"
        },
        {
            "title": "A modified YOLOv5 architecture for efficient fire detection in smart cities",
            "source": "crossref"
        },
        {
            "title": "Spiking transformers for event-based single object tracking",
            "source": "crossref"
        },
        {
            "title": "A review of tunnel fire evacuation strategies and state-of-the-art research in China",
            "source": "crossref"
        },
        {
            "title": "FSDF: A high-performance fire detection framework",
            "source": "crossref"
        },
        {
            "title": "Study on SVM-based Flame Recognition and Fire Warning for Cotton and Linen Warehouses",
            "source": "crossref"
        },
        {
            "title": "FTA-DETR: An efficient and precise fire detection framework based on an end-to-end architecture applicable to embedded platforms",
            "source": "crossref"
        },
        {
            "title": "Deblurring low-light images with events",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

FlaDE (Flame Detection Dataset based on Event Cameras) is a dataset designed for event-based flame detection. Traditional RGB cameras often struggle with issues such as static backgrounds, overexposure, and redundant data.
