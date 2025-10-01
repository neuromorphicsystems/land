---
{
    "name": "SM-ERGB",
    "aliases": [
        "SM-ERGB-Synth",
        "SM-ERGB-Real"
    ],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E",
        "Prophesee Gen4"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Beamsplitters",
        "Motion Magnification"
    ],
    "description": "Video Motion Magnification",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Code to generate the data is provided in the Github repository. A small sample of the data is provided online.",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1ssEE1wvnBt4EZjxoCcfoIX8FzOsTIKN8?usp=drive_link",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 0.3,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Motion Magnification",
        "doi": "10.1007/978-3-031-73636-0_25",
        "authors": [
            "Yutian Chen",
            "Shi Guo",
            "Fangzheng Yu",
            "Feng Zhang",
            "Jinwei Gu",
            "Tianfan Xue"
        ],
        "abstract": "Detecting and magnifying imperceptible high-frequency motions in real-world scenarios has substantial implications for industrial and medical applications. These motions are characterized by small amplitudes and high frequencies. Traditional motion magnification methods rely on costly high-speed cameras or active light sources, which limit the scope of their applications. In this work, we propose a dual-camera system consisting of an event camera and a conventional RGB camera for video motion magnification, providing temporally-dense information from the event stream and spatially-dense data from the RGB images. This innovative combination enables a broad and cost-effective amplification of high-frequency motions. By revisiting the physical camera model, we observe that estimating motion direction and magnitude necessitates the integration of event streams with additional image features. On this basis, we propose a novel deep network tailored for event-based motion magnification. Our approach utilizes the Second-order Recurrent Propagation module to proficiently interpolate multiple frames while addressing artifacts and distortions induced by magnified motions. Additionally, we employ a temporal filter to distinguish between noise and useful signals, thus minimizing the impact of noise. We also introduced the first event-based motion magnification dataset, which includes a synthetic subset and a real-captured subset for training and benchmarking. Through extensive experiments in magnifying small-amplitude, high-frequency motions, we demonstrate the effectiveness and accuracy of our dual-camera system and network, offering a cost-effective and flexible solution for motion detection and magnification. Project website: https://openimaginglab.github.io/emm/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-10-01T07:50:33.705212"
        },
        {
            "source": "scholar",
            "count": 5,
            "updated": "2025-10-01T07:50:35.935083"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-73636-0_25"
        },
        {
            "type": "project_page",
            "url": "https://openimaginglab.github.io/emm/"
        },
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/WACV2025/papers/Cho_Unifying_Low-Resolution_and_High-Resolution_Alignment_by_Event_Cameras_for_Space-Time_WACV_2025_paper.pdf#page=5.57"
        },
        {
            "type": "github_page",
            "url": "https://github.com/OpenImagingLab/emm"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW.2017.150",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2013.455",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299171",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00423",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01728",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00745",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
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
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1073204.1073223",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01225-0_39",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00555",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00409",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2012.2230553",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01584",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01730",
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
            "doi": "10.1145/2461912.2461966",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2014.6831820",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2185520.2185561",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58595-2_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.61",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-023-01754-5",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "428\u2013444",
        "month": "nov",
        "year": 2024,
        "author": "Chen, Yutian and Guo, Shi and Yu, Fangzheng and Zhang, Feng and Gu, Jinwei and Xue, Tianfan",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer Vision \u2013 ECCV 2024",
        "doi": "10.1007/978-3-031-73636-0_25",
        "url": "http://dx.doi.org/10.1007/978-3-031-73636-0_25",
        "issn": "1611-3349",
        "isbn": "9783031736360",
        "title": "Event-Based Motion Magnification",
        "type": "book",
        "key": "Chen_2024"
    }
}
---

# Dataset Description