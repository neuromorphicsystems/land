---
{
    "name": "RGBE-Gaze",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Eye Tracking",
        "Gaze Tracking"
    ],
    "task": "Gaze Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://1drv.ms/f/s!Ar4TcaawWPssgo0XDpkxH4OQBvrgiw?e=7nbWEZ",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 360.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "RGBE-Gaze: A Large-scale Event-based Multimodal Dataset for High Frequency Remote Gaze Tracking",
        "doi": "10.1109/TPAMI.2024.3474858",
        "authors": [
            "Guangrong Zhao",
            "Yiran Shen",
            "Chenlong Zhang",
            "Zhaoxin Shen",
            "Yuanfeng Zhou",
            "Hongkai Wen"
        ],
        "abstract": "High-frequency gaze tracking demonstrates significant potential in various critical applications, such as foveated rendering, gaze-based identity verification, and the diagnosis of mental disorders. However, existing eye-tracking systems based on CCD/CMOS cameras either provide tracking frequencies below 200 Hz or employ high-speed cameras, leading to substantial power consumption and increased device volume. While there have been some high-speed eye-tracking datasets and methods based on event cameras, they are primarily tailored for near-eye camera scenarios. They lack the advantages associated with remote camera scenarios, such as the absence of the need for direct contact, enhanced user comfort and convenience, and the freedom of head pose in natural environments. In this work, we present RGBE-Gaze, the first large-scale and multimodal dataset for remote gaze tracking in high-frequency through synchronizing RGB and event cameras. This dataset is collected from 66 participants with diverse genders and age groups. The custom hybrid RGB-Event camera setup is leveraged to collect 3.6 million full-face high spatial resolution RGB images and 26.3 billion high temporal resolution event samples. Additionally, the dataset includes 10.7 million gaze references from the Gazepoint GP3 HD eye tracker and 15,972 sparse points of gaze (PoG) ground truth obtained through manual stimuli clicks by participants. We also present the dataset distribution across characteristics such as head pose and distance, gaze direction, pupil size, and tracking frequency. Furthermore, we introduce a hybrid frame-event based gaze estimation method specifically designed for the collected dataset. Moreover, we perform extensive evaluations of this method along with existing frame-based gaze estimation methods under various gaze-related factors, including different subjects, gaze directions, head poses, head distances, and pupil diameters. The evaluation results illustrate that introducing event stream as a new modality into the dataset improves gaze tracking frequency and demonstrates greater estimation robustness across diverse gaze-related factors.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 4,
            "updated": "2025-07-11T08:27:05.022364"
        },
        {
            "source": "scholar",
            "count": 8,
            "updated": "2025-07-11T08:27:04.647781"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10706089"
        },
        {
            "type": "github_page",
            "url": "https://github.com/GuangrongZhao/RGBE-Gaze"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "66",
        "num_male": "37",
        "num_female": "29"
    },
    "bibtex": {
        "pages": "1--15",
        "year": 2024,
        "author": "Zhao, Guangrong and Shen, Yiran and Zhang, Chenlong and Shen, Zhaoxin and Zhou, Yuanfeng and Wen, Hongkai",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-10-13",
        "language": "en",
        "doi": "10.1109/TPAMI.2024.3474858",
        "url": "https://ieeexplore.ieee.org/document/10706089/",
        "shorttitle": "{RGBE}-{Gaze}",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
        "title": "{RGBE}-{Gaze}: {A} {Large}-scale {Event}-based {Multimodal} {Dataset} for {High} {Frequency} {Remote} {Gaze} {Tracking}",
        "type": "article",
        "key": "zhao_rgbe-gaze_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.3758/s13428-017-0913-7",
            "source": "crossref"
        },
        {
            "doi": "10.1016/B978-044451020-4/50031-1",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10649-020-09948-1",
            "source": "crossref"
        },
        {
            "doi": "10.25046/aj030653",
            "source": "crossref"
        },
        {
            "doi": "10.1037/0096-1523.15.3.529",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3127589",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3361330",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBIOM.2022.3167633",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10055-023-00931-8",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fneur.2017.00592",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3304109.3325818",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3054886",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2021.3067784",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01006",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2578153.2578190",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58610-2_44",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV51458.2022.00399",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tpami.2024.3393571",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3290605.3300780",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2778103",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58558-7_22",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBME.2005.863952",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2501988.2501994",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01249-6_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.239",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.jneumeth.2019.05.016",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-23192-1_4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2005.531",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.229",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2857491.2857505",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iccvw.2019.00455",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2008.4563184",
            "source": "crossref"
        },
        {
            "doi": "10.1109/THMS.2015.2400442",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20876-9_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00701",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-11024-6_54",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BioCAS58349.2023.10389062",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.03.019",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app131810357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2023.3297500",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3204493.3204548",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2014.6942940",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.1987.4767965",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2014.235",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG.2017.150",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299081",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2017.284",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00120",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00286",
            "source": "crossref"
        },
        {
            "title": "Tobii eye trackers.",
            "source": "crossref"
        },
        {
            "title": "Pupil labs eye tracker.",
            "source": "crossref"
        },
        {
            "title": "Gp3 hd eye tracker 150hz.",
            "source": "crossref"
        },
        {
            "title": "Wikipedia saccade.",
            "source": "crossref"
        },
        {
            "title": "A highly accurate, precise, and versatile eye tracker.",
            "source": "crossref"
        },
        {
            "title": "Tobii pro spectrum deeper insights into human behavior.",
            "source": "crossref"
        },
        {
            "title": "EV-eye: Rethinking high-frequency eye tracking through the lenses of event cameras",
            "source": "crossref"
        },
        {
            "title": "Dark and bright pupil tracking.",
            "source": "crossref"
        },
        {
            "title": "PointNet: Deep learning on point sets for 3D classification and segmentation",
            "source": "crossref"
        },
        {
            "title": "PointNet: Deep hierarchical feature learning on point sets in a metric space",
            "source": "crossref"
        },
        {
            "title": "A low-power neuromorphic approach for efficient eye-tracking",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "The ultra high-speed and compact, HD event-based vision evaluation kit built to endure field testing conditions.",
            "source": "crossref"
        },
        {
            "title": "Flir bfs-u3\u201316s",
            "source": "crossref"
        },
        {
            "title": "Event camera.",
            "source": "crossref"
        },
        {
            "title": "Prophesee biases.",
            "source": "crossref"
        },
        {
            "title": "Fa lens vm0820mp5 8mm manual iris machine vision lens.",
            "source": "crossref"
        },
        {
            "title": "Calibration toolbox by prophesee",
            "source": "crossref"
        },
        {
            "title": "fitgeotrans.",
            "source": "crossref"
        },
        {
            "title": "Finding optimal rotation and translation between corresponding 3D points.",
            "source": "crossref"
        },
        {
            "title": "Wikipedia, transformation matrix.",
            "source": "crossref"
        },
        {
            "title": "Correlation of coordinate transformation parameters",
            "source": "crossref"
        },
        {
            "title": "Right-hand rule.",
            "source": "crossref"
        },
        {
            "title": "Lm40e/lm50e/lm60e laser distance meters (discontinued).",
            "source": "crossref"
        },
        {
            "title": "Dlib-ml: A machine learning toolkit",
            "source": "crossref"
        },
        {
            "title": "Perspective-n-point (PnP) pose computation.",
            "source": "crossref"
        },
        {
            "title": "Mixed precision training",
            "source": "crossref"
        }
    ]
}
---


### Dataset Description

The **RGBE_Gaze_dataset** folder consists of the data generated by FLIR BFS-U3-16S2C RGB camera (RGB Images), Prophesee EVK4 event camera (Event Streams), Gazepoint GP3 HD (Gaze References) and mouse click positions on the screen (Sparse PoG ground truth).

This directory contains 66 subdirectories corresponding to 66 participants i.e., user_1-user_66. For each participant, the six sessions' data is contained in six separate directory i.e., exp1-exp6. Within each session directory, you will find a `convert2eventspace` folder containing RGB Images, a `prophesee` folder containing the Event Stream, a `gazepoint` folder containing Gaze References, and a `click_gt_cpu.txt` text file recording Mouse Click Positions alongside corresponding windows CPU timestamps.

### Dataset Structure 

- Contains data from 66 subjects (37 male and 29)