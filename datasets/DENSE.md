---
{
    "name": "DENSE",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CARLA",
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Depth, Stereo, and 3D Reconstruction",
    "subcategory": [
        "Depth Estimation"
    ],
    "task": "Monocular Depth Estimation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": true,
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
                "url": "https://rpg.ifi.uzh.ch/E2DEPTH.html",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 2.53,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Learning Monocular Dense Depth from Events",
        "doi": "10.1109/3DV50981.2020.00063",
        "authors": [
            "Javier Hidalgo-Carrio",
            "Daniel Gehrig",
            "Davide Scaramuzza"
        ],
        "abstract": "Event cameras are novel sensors that output brightness changes in the form of a stream of asynchronous \u201devents\u201d instead of intensity frames. Compared to conventional image sensors, they offer significant advantages: high temporal resolution, high dynamic range, no motion blur, and much lower bandwidth. Recently, learning-based approaches have been applied to event-based data, thus unlocking their potential and making significant progress in a variety of tasks, such as monocular depth prediction. Most existing approaches use standard feed-forward architectures to generate network predictions, which do not leverage the temporal consistency presents in the event stream. We propose a recurrent architecture to solve this task and show significant improvement over standard feed-forward methods. In particular, our method generates dense depth predictions using a monocular setup, which has not been shown previously. We pretrain our model using a new dataset containing events and depth maps recorded in the CARLA simulator. We test our method on the Multi Vehicle Stereo Event Camera Dataset (MVSEC). Quantitative experiments show up to 50\\% improvement in average depth error with respect to previous event-based methods. Code and dataset are available at: http://rpg.ifi.uzh.ch/e2depth.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 84,
            "updated": "2025-07-12T09:28:09.652766"
        },
        {
            "source": "scholar",
            "count": 145,
            "updated": "2025-07-12T09:28:09.379530"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2010.08350"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9320311"
        },
        {
            "type": "project_page",
            "url": "https://rpg.ifi.uzh.ch/E2DEPTH.html"
        }
    ],
    "full_name": "Depth Estimation oN Synthetic Events (DENSE)",
    "additional_metadata": {
        "sensor_resolution": "346 x 260",
        "num_recordings": "5000"
    },
    "bibtex": {
        "pages": "534--542",
        "year": 2020,
        "month": "nov",
        "author": "Hidalgo-Carrio, Javier and Gehrig, Daniel and Scaramuzza, Davide",
        "publisher": "IEEE",
        "booktitle": "2020 {International} {Conference} on {3D} {Vision} ({3DV})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/3DV50981.2020.00063",
        "url": "https://ieeexplore.ieee.org/document/9320311/",
        "isbn": "978-1-72818-128-8",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Learning {Monocular} {Dense} {Depth} from {Events}",
        "address": "Fukuoka, Japan",
        "type": "inproceedings",
        "key": "hidalgo-carrio_learning_2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00161",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.700",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.699",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00393",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364914549607",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00218",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.304",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2012.120",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364913491297",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2010.5433973",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "title": "Unsupervised event-based learning of optical flow, depth, and ego-motion",
            "source": "crossref"
        },
        {
            "title": "Convolutional LSTM network: A machine learning approach for precipitation nowcasting",
            "source": "crossref"
        },
        {
            "title": "Realtime time synchronized event-based stereo",
            "source": "crossref"
        },
        {
            "title": "Batch normalization: Accelerating deep network training by reducing internal covariate shift",
            "source": "crossref"
        },
        {
            "title": "Simultaneous mosaicing and tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Real-time 3D reconstruction and 6-DoF tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Indoor segmentation and support inference from rgbd images",
            "source": "crossref"
        },
        {
            "title": "CARLA: An open urban driving simulator",
            "source": "crossref"
        },
        {
            "title": "U-net: Convolutional networks for biomedical image segmentation",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "ESIM: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "EMVS: Event-based multi-view stereo",
            "source": "crossref"
        },
        {
            "title": "Real-time visual-inertial odometry for event cameras using keyframebased nonlinear optimization",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Dataset uses the CARLA simulator with a custom event-based plugin
- Simulated dataset has a resolution of 346 x 260 to match the real-world data from a DAVIS346 used in the \[[MVSEC]\] dataset
- Dataset contains 5000 recordings
