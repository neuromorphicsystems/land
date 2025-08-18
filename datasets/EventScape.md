---
{
    "name": "EventScape",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CARLA"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Depth Estimation",
        "Pedestrian Detection"
    ],
    "task": "Frame/Event Fusion (Depth Estimation)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://rpg.ifi.uzh.ch/RAMNet.html",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 97.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Combining Events and Frames Using Recurrent Asynchronous Multimodal Networks for Monocular Depth Prediction",
        "doi": "10.1109/LRA.2021.3060707",
        "authors": [
            "Daniel Gehrig",
            "Michelle Ruegg",
            "Mathias Gehrig",
            "Javier Hidalgo-Carrio",
            "Davide Scaramuzza"
        ],
        "abstract": "Event cameras are novel vision sensors that report per-pixel brightness changes as a stream of asynchronous \u201cevents\u201d. They offer signi\ufb01cant advantages compared to standard cameras due to their high temporal resolution, high dynamic range and lack of motion blur. However, events only measure the varying component of the visual signal, which limits their ability to encode scene context. By contrast, standard cameras measure absolute intensity frames, which capture a much richer representation of the scene. Both sensors are thus complementary. However, due to the asynchronous nature of events, combining them with synchronous images remains challenging, especially for learning-based methods. This is because traditional recurrent neural networks (RNNs) are not designed for asynchronous and irregular data from additional sensors. To address this challenge, we introduce Recurrent Asynchronous Multimodal (RAM) networks, which generalize traditional RNNs to handle asynchronous and irregular data from multiple sensors. Inspired by traditional RNNs, RAM networks maintain a hidden state that is updated asynchronously and can be queried at any time to generate a prediction. We apply this novel architecture to monocular depth estimation with events and frames where we show an improvement over state-of-the-art methods by up to 30\\% in terms of mean absolute depth error. To enable further research on multimodal learning with events, we release EventScape, a new dataset with events, intensity frames, semantic labels, and depth maps recorded in the CARLA simulator.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 113,
            "updated": "2025-06-14T09:42:25.591525"
        },
        {
            "source": "scholar",
            "count": 151,
            "updated": "2025-06-14T09:42:25.412001"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2102.09320"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9359329"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/RAMNet.html"
        },
        {
            "type": "github_page",
            "url": "https://github.com/uzh-rpg/rpg_ramnet"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "sensor_resolution": "512 x 256",
        "stereo": false
    },
    "bibtex": {
        "pages": "2822--2829",
        "year": 2021,
        "month": "apr",
        "author": "Gehrig, Daniel and Ruegg, Michelle and Gehrig, Mathias and Hidalgo-Carrio, Javier and Scaramuzza, Davide",
        "journal": "IEEE Robotics and Automation Letters",
        "urldate": "2024-04-13",
        "number": "2",
        "language": "en",
        "doi": "10.1109/LRA.2021.3060707",
        "url": "https://ieeexplore.ieee.org/document/9359329/",
        "issn": "2377-3766, 2377-3774",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "6",
        "title": "Combining {Events} and {Frames} {Using} {Recurrent} {Asynchronous} {Multimodal} {Networks} for {Monocular} {Depth} {Prediction}",
        "type": "article",
        "key": "gehrig_combining_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICIP.2017.8296851",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00218",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00393",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2769655",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00161",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s19143224",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793527",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.1997.9.8.1735",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-30642-7_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00205",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.63",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2018.2798607",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMI.2019.2950936",
            "source": "crossref"
        },
        {
            "title": "U-Net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "DDD20 End-to-End event camera driving dataset: Fusing frames and events with deep learning for improved steering prediction",
            "source": "crossref"
        },
        {
            "title": "Depth map prediction from a single image using a multi-scale deep network",
            "source": "crossref"
        },
        {
            "title": "CARLA: An open urban driving simulator",
            "source": "crossref"
        },
        {
            "title": "Phased LSTM: Accelerating recurrent network training for long or event-based sequences",
            "source": "crossref"
        },
        {
            "title": "Semanticdepth: Fusing semantic segmentation and monocular depth estimation for enabling autonomous driving in roads without lane lines",
            "source": "crossref"
        },
        {
            "title": "Neural ordinary differential equations",
            "source": "crossref"
        },
        {
            "title": "Fast image reconstruction with an event camera",
            "source": "crossref"
        },
        {
            "title": "Learning monocular dense depth from events",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "The handbook of multimodal-multisensor interfaces: Signal processing, architectures, and detection of emotion and cognition",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Automatic differentiation in PyTorch",
            "source": "crossref"
        },
        {
            "title": "Augmented reality for depth cues in monocular minimally invasive surgery",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

EventScape also contains moving pedestrians to enable development of pedestrian-aware perception algorithms. A sensor size of 512 x 256 pixels is used with a a focal length of 256 pixels.

EventScape is split into training, validation and test folders which contain 536, 103 and 119 sequences respectively. Each sequence contains between 100 and 150 samples, each with semantic labels, depth labels, raw events, frames and vehicle navigation data. The vehicle navigation data contain the following information: position, orientation, angular velocity, linear velocity, steering angle, brake state and throttle. Below you can find samples of each dataset split.

To download the whole dataset use the following links: [Training set (71 Gb)](https://rpg.ifi.uzh.ch/data/RAM_Net/dataset/Town01-03_train.zip), [Validation set (12 Gb)](https://rpg.ifi.uzh.ch/data/RAM_Net/dataset/Town05_val.zip), [Test set (14 Gb)](https://rpg.ifi.uzh.ch/data/RAM_Net/dataset/Town05_test.zip).

Note that, while the test and validation set each were recorded in Town 05, they were recorded in different locations with no overlap.

Source: https://rpg.ifi.uzh.ch/RAMNet.html
