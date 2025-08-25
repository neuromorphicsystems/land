---
{
    "name": "ERF-X170FPS",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "FLIR Blackfly S"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Beamsplitters",
        "High-Speed Video Reconstruction"
    ],
    "description": "Video frame interpolation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://github.com/intelpro/CBMNet",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 294.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Video Frame Interpolation With Cross-Modal Asymmetric Bidirectional Motion Fields",
        "doi": "10.1109/CVPR52729.2023.01729",
        "authors": [
            "Taewoo Kim",
            "Yujeong Chae",
            "Hyun-Kurl Jang",
            "Kuk-Jin Yoon"
        ],
        "abstract": "Video Frame Interpolation (VFI) aims to generate intermediate video frames between consecutive input frames. Since the event cameras are bio-inspired sensors that only encode brightness changes with a micro-second temporal resolution, several works utilized the event camera to enhance the performance of VFI. However, existing methods estimate bidirectional inter-frame motion fields with only events or approximations, which can not consider the complex motion in real-world scenarios. In this paper, we propose a novel event-based VFI framework with crossmodal asymmetric bidirectional motion field estimation. In detail, our EIF-BiOFNet utilizes each valuable characteristic of the events and images for direct estimation of inter-frame motion fields without any approximation methods. Moreover, we develop an interactive attention-based frame synthesis network to efficiently leverage the complementary warping-based and synthesis-based features. Finally, we build a large-scale event-based VFI dataset, ERF-X170FPS, with a high frame rate, extreme motion, and dynamic textures to overcome the limitations of previous event-based VFI datasets. Extensive experimental results validate that our method shows significant performance improvement over the state-of-the-art VFI methods on various datasets. Our project pages are available at: https://github.com/intelpro/CBMNet",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 21,
            "updated": "2025-06-09T09:45:37.949919"
        },
        {
            "source": "scholar",
            "count": 40,
            "updated": "2025-06-09T09:45:37.115206"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2023/papers/Kim_Event-Based_Video_Frame_Interpolation_With_Cross-Modal_Asymmetric_Bidirectional_Motion_Fields_CVPR_2023_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10203105"
        },
        {
            "type": "github_page",
            "url": "https://github.com/intelpro/CBMNet"
        }
    ],
    "full_name": "Events and RGB Frames with eXtreme Motions at 170FPS (ERF-X170FPS)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "18032--18042",
        "year": 2023,
        "month": "jun",
        "author": "Kim, Taewoo and Chae, Yujeong and Jang, Hyun-Kurl and Yoon, Kuk-Jin",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-19",
        "language": "en",
        "doi": "10.1109/CVPR52729.2023.01729",
        "url": "https://ieeexplore.ieee.org/document/10203105/",
        "isbn": "9798350301298",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Event-based {Video} {Frame} {Interpolation} with {Cross}-{Modal} {Asymmetric} {Bidirectional} {Motion} {Fields}",
        "address": "Vancouver, BC, Canada",
        "type": "inproceedings",
        "key": "Kim2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2019.00382",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2941941",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.1994.413553",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6634",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00351",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01402",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00354",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19781-9_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01632",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_33",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2020.3009065",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00201",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00536",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-66823-5_3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00986",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00352",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00110",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00059",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298747",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.244",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58568-6_7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01427",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.85",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00449",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01696",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01422",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00765",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00931",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.48550/ARXIV.1706.03762",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00513",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-01144-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01432",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00564",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "title": "Layer normalization",
            "source": "crossref"
        },
        {
            "title": "Quadratic video interpolation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Training data link - 218 Gb (https://drive.google.com/file/d/1Bsf9qreziPcVEuf0_v3kjdPUh27zsFXK/view?usp=drive_link)
- Testing data link - 76 Gb (https://drive.google.com/file/d/1Dk7jVQD29HqRVV11e8vxg5bDOh6KxrzL/view?usp=drive_link)
- NOTE: According to the Github repository, the and y coordinates of the raw event file have been multiplied by 128.
