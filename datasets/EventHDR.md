---
{
    "name": "EventHDR",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "Thorlabs CCM1-BS013",
        "Photron IDP-Express R2000"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Frame Reconstruction",
        "HDR Video Reconstruction",
        "High-Speed Video Reconstruction",
        "Beamsplitters"
    ],
    "task": "Frame/Event fusion (HDR and high temporal imaging)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "The download link in the Github repository does not currently work",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://1drv.ms/f/s!AuA3qjJbfh9FjQa4GvHC_9Fn9UQm?e=jODI9N",
                "format": "HDF5",
                "available": true
            }
        ]
    },
    "paper": {
        "title": "EventHDR: From Event to High-Speed HDR Videos and Beyond",
        "doi": "10.1109/TPAMI.2024.3469571",
        "authors": [
            "Yunhao Zou",
            "Ying Fu",
            "Tsuyoshi Takatani",
            "Yinqiang Zheng"
        ],
        "abstract": "Event cameras are innovative neuromorphic sensors that asynchronously capture the scene dynamics. Due to the event-triggering mechanism, such cameras record event streams with much shorter response latency and higher intensity sensitivity compared to conventional cameras. On the basis of these features, previous works have attempted to reconstruct high dynamic range (HDR) videos from events, but have either suffered from unrealistic artifacts or failed to provide sufficiently high frame rates. In this paper, we present a recurrent convolutional neural network that reconstruct high-speed HDR videos from event sequences, with a key frame guidance to prevent potential error accumulation caused by the sparse event data. Additionally, to address the problem of severely limited real dataset, we develop a new optical system to collect a real-world dataset with paired high-speed HDR videos and event streams, facilitating future research in this field. Our dataset provides the first real paired dataset for event-to-HDR reconstruction, avoiding potential inaccuracies from simulation strategies. Experimental results demonstrate that our method can generate high-quality, high-speed HDR videos. We further explore the potential of our work in cross-camera reconstruction and downstream computer vision tasks, including object detection, panoramic segmentation, optical flow estimation, and monocular depth estimation under HDR scenarios.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 11,
            "updated": "2025-06-12T16:30:29.381044"
        },
        {
            "source": "crossref",
            "count": 4,
            "updated": "2025-06-12T16:30:29.589338"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2409.17029"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10713104"
        },
        {
            "type": "github_page",
            "url": "https://github.com/yunhao-zou/EventHDR"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "26",
        "recording_duration": "5.6 s",
        "stereo": false
    },
    "bibtex": {
        "pages": "1--18",
        "year": 2024,
        "author": "Zou, Yunhao and Fu, Ying and Takatani, Tsuyoshi and Zheng, Yinqiang",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-10-14",
        "language": "en",
        "doi": "10.1109/TPAMI.2024.3469571",
        "url": "https://ieeexplore.ieee.org/document/10713104/",
        "shorttitle": "{EventHDR}",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{EventHDR}: {From} {Event} to {High}-{Speed} {HDR} {Videos} and {Beyond}",
        "type": "article",
        "key": "zou_eventhdr_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01280",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52733.2024.00044",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2024.3416880",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2014.7025040",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.5244/c.31.39",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3060707",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-020-01410-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341224",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ROBIO.2015.7419035",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00256",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3278940",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.23919/cje.2022.00.284",
            "source": "crossref"
        },
        {
            "doi": "10.23919/cje.2022.00.414",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2011.6033299",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00834",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00284",
            "source": "crossref"
        },
        {
            "doi": "10.1049/cje.2021.00.455",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tnnls.2024.3386809",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW56347.2022.00301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3311336",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00358",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00903",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_34",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS55552.2023.10341802",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2023.3311766",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-023-01808-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00247",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.89",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00237",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01267-0_11",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-24574-4_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01235",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01220",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tnnls.2023.3340561",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1401132.1401174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01133",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.2040003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPhot.2013.6528315",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3503161.3548142",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3096985",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20068-7_38",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58539-6_12",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00491",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00588",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.291",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3152999",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593380",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3113352",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TGRS.2023.3340517",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3059911",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2024.3372460",
            "source": "crossref"
        },
        {
            "doi": "10.4324/9780203978948-13",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tpami.2024.3449959",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00135",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00963",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3019967",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV50981.2020.00063",
            "source": "crossref"
        },
        {
            "title": "Long-term object tracking with a moving event camera",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "PyTorch: An imperative style, high-performance deep learning library",
            "source": "crossref"
        },
        {
            "title": "iniVation \u2014 Neuromorphic vision systems",
            "source": "crossref"
        },
        {
            "title": "The SJTU HDR video sequence dataset",
            "source": "crossref"
        },
        {
            "title": "EISeg: An efficient interactive segmentation tool based on PaddlePaddle",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

### Dataset Structure 
- Contains data from 26 different outdoor scenes
- Each recording is 5.6 s 


### Comparison Table

| Dataset                            | Year | Task          | Train/Test   | HDR/LDR | Bit-Depth | Frame Rate   | Num. Frames |
| ---------------------------------- | ---- | ------------- | ------------ | ------- | --------- | ------------ | ----------- |
| [[The Event-Based Camera Dataset]] | 2016 | HDR Recon.    | Test         | LDR     | 8         | 24 fps       | 28418       |
| [[HQF]]                            | 2020 | HDR Recon.    | Test         | LDR     | 8         | <40 fps      | 15390       |
| [[BS-ERGB]]                        | 2022 | Video Interp. | Train & Test | HDR     | 8         | 28 fps       | 40000       |
| [[PIR2000-DAVIS]]                  | 2022 | Video Deblur. | Train & Test | LDR     | 8         | 2000 fps     | 2565        |
| [[EventHDR]]                       | 2024 | HDR Recon.    | Train & Test | HDR     | 16        | 500-2000 fps | 81128       |