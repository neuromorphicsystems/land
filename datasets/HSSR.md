---
{
    "name": "HSSR",
    "aliases": [
        "S-ImgNet",
        "S-Cars"
    ],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "Spike Camera"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Monitor Conversion",
        "Object Detection"
    ],
    "description": "High speed object recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "S-ImgNet",
                "url": "https://pkuorgcn-my.sharepoint.com/personal/jwz_pku_org_cn/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fjwz%5Fpku%5Forg%5Fcn%2FDocuments%2FHSSR%2FSpike%2DImageNet%2Ezip&parent=%2Fpersonal%2Fjwz%5Fpku%5Forg%5Fcn%2FDocuments%2FHSSR&ga=1",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "S-Cars",
                "url": "https://pkuorgcn-my.sharepoint.com/:u:/g/personal/jwz_pku_org_cn/ET6H-AbLN65Pro47JkRod7YBSOSQLQGd3EpdqR9alaaDRQ?e=sl4ox8",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 85.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Recognizing High-Speed Moving Objects with Spike Camera",
        "doi": "10.1145/3581783.3612054",
        "authors": [
            "Junwei Zhao",
            "Jianming Ye",
            "Shiliang Shiliang",
            "Zhaofei Yu",
            "Tiejun Huang"
        ],
        "abstract": "Spike camera is a novel bio-inspired vision sensor that mimics the sampling mechanism of the primate fovea. It presents high temporal resolution and dynamic range, showing great potentials in the high-speed moving object recognition task, which has not been fully explored in the Multimedia community due to the lack of data and annotations. This paper contributes the first large-scale High-Speed Spiking Recognition (HSSR) dataset, by recording high-speed moving objects using a spike camera. The HSSR dataset contains 135,000 indoor objects annotated using ImageNet labels and 3,100 outdoor objects collected from real-world scenarios. Furthermore, we propose an original spiking recognition framework, which employs long-term spike stream features to supervise the feature learning from short-term spike streams. This framework improves the recognition accuracy, meanwhile substantially decreasing the recognition latency, making our method can accurately recognize moving objects at an equivalent speed of 514 km/h, using only 1 ms of spike stream. Experimental results show that, the proposed method achieves 76.5% accuracy for recognizing 100 fine-grained indoor objects and 84.3% accuracy for recognizing 8 outdoor objects using 1 ms of spike streams. Resources will be available at https://github.com/Evin-X/HSSR.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-06-30T07:09:38.017917"
        },
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-06-30T07:09:37.598406"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/abs/10.1145/3581783.3612054"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Evin-X/HSSR"
        }
    ],
    "full_name": "High-Speed Spiking Recognition (HSSR)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "7657--7665",
        "year": 2023,
        "month": "oct",
        "author": "Zhao, Junwei and Ye, Jianming and Shiliang, Shiliang and Yu, Zhaofei and Huang, Tiejun",
        "publisher": "ACM",
        "booktitle": "Proceedings of the 31st {ACM} {International} {Conference} on {Multimedia}",
        "urldate": "2024-12-02",
        "language": "en",
        "doi": "10.1145/3581783.3612054",
        "url": "https://dl.acm.org/doi/10.1145/3581783.3612054",
        "isbn": "9798400701085",
        "title": "Recognizing {High}-{Speed} {Moving} {Objects} with {Spike} {Camera}",
        "address": "Ottawa ON Canada",
        "type": "inproceedings",
        "key": "zhao_recognizing_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/WACVW54805.2022.00052",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2785272",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2019.09.005",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3077136",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2021.3073673",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3458305.3463373",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3587819.3590969",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eng.2022.01.012",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2022.12.017",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00309",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i2.20021",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_37",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i02.5486",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01212",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.74",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.05.002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME52920.2022.9859975",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01301",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.3040969",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS48785.2022.9937811",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v35i12.17320",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3228168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00248",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00240",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00953",
            "source": "crossref"
        },
        {
            "title": "Deep residual learning in spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Visualizing data using t-SNE",
            "source": "crossref"
        },
        {
            "title": "Learning Optical Flow from Continuous Spike Streams",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Comprises two datasets:
  - Spiking ImageNet (S-ImgNet)
  - Spiking data of Cars (S-Cars).
- Monitor conversion using an e-ink screen to prevent flicker (for the S-ImgNet dataset)
