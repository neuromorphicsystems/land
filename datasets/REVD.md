---
{
    "name": "REVD",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "FLIR BlackFly"
    ],
    "category": "Filtering and De-noising",
    "subcategory": [
        "Beamsplitters",
        "De-blurring",
        "Urban Scenes"
    ],
    "task": "Image de-blurring",
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
                "name": "Training Set (Google Drive)",
                "url": "https://drive.google.com/drive/folders/1nu84bu_rLnUz-HQZirtlAqd0fMFvcm6K?usp=drive_link",
                "format": "TSV",
                "available": true
            },
            {
                "name": "Testing Set (Google Drive)",
                "url": "https://drive.google.com/drive/folders/11a5NG4RwmbVxlSdxiU0MGrF46U6Lj09b?usp=drive_link",
                "format": "TSV",
                "available": true
            }
        ]
    },
    "paper": {
        "title": "Frequency-Aware Event-Based Video Deblurring for Real-World Motion Blur",
        "doi": "10.1109/CVPR52733.2024.02358",
        "authors": [
            "Taewoo Kim",
            "Hoonhee Cho",
            "Kuk-Jin Yoon"
        ],
        "abstract": "Video deblurring aims to restore sharp frames from blurred video clips. Despite notable progress in video deblurring works, it is still a challenging problem because of the loss of motion information during the duration of the exposure time. Since event cameras can capture clear motion information asynchronously with high temporal resolution, several works exploit the event camera for deblurring as they can provide abundant motion information. However, despite these approaches, there were few cases of actively exploiting the long-range temporal dependency of videos. To tackle these deficiencies, we present an event-based video deblurring framework by actively utilizing temporal information from videos. To be specific, we first introduce a frequency-based cross-modal feature enhancement module. Second, we propose event-guided video alignment modules by considering the valuable characteristics of the event and videos. In addition, we designed a hybrid camera system to collect the first real-world event-based video deblurring dataset. For the first time, we build a dataset containing synchronized high-resolution real-world blurred videos and corresponding sharp videos and event streams. Experimental results validate that our frameworks significantly outperform the state-of-the-art frame-based and event-based deblurring works in the various datasets. The project pages are available at https://sites.google.com/view/fevd-cvpr2024.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 8,
            "updated": "2025-06-15T11:21:13.947907"
        },
        {
            "source": "scholar",
            "count": 28,
            "updated": "2025-06-15T11:21:13.787543"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Kim_Frequency-aware_Event-based_Video_Deblurring_for_Real-World_Motion_Blur_CVPR_2024_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10655975"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/fevd-cvpr2024"
        }
    ],
    "full_name": "Real-world Event Video Deblurring (REVD)",
    "additional_metadata": {
        "num_recordings": "21",
        "sensor_resolution": "1024\u00d7768",
        "stereo": false
    },
    "bibtex": {
        "pages": "24966--24976",
        "year": 2024,
        "month": "jun",
        "author": "Kim, Taewoo and Cho, Hoonhee and Yoon, Kuk-Jin",
        "publisher": "IEEE",
        "booktitle": "2024 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-20",
        "language": "en",
        "doi": "10.1109/CVPR52733.2024.02358",
        "url": "https://ieeexplore.ieee.org/document/10655975/",
        "isbn": "9798350353006",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Frequency-{Aware} {Event}-{Based} {Video} {Deblurring} for {Real}-{World} {Motion} {Blur}",
        "address": "Seattle, WA, USA",
        "type": "inproceedings",
        "key": "kim_frequency-aware_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1609/aaai.v35i2.16173",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW50498.2020.00237",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.1994.413553",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2018.8368468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00027",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i1.19923",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19824-3_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01148",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00460",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.89",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2008.4587582",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01134",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00397",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_38",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01729",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00570",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i2.25281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00829",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-66709-6_6",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-81897-4_4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00311",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.02125",
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
            "doi": "10.1109/ICCV48922.2021.00449",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00516",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00366",
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
            "doi": "10.1007/978-3-031-20068-7_38",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3216216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00247",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19800-7_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.34",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01972",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/cvpr46437.2021.01458",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00564",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00613",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19787-1_33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00985",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58539-6_12",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i3.20272",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01142",
            "source": "crossref"
        },
        {
            "title": "Layer normalization",
            "source": "crossref"
        },
        {
            "title": "Chasing day and night: Towards ro-bust and efficient all-day object detection guided by an event camera",
            "source": "crossref"
        },
        {
            "title": "Fast fourier convolution",
            "source": "crossref"
        },
        {
            "title": "Learning to deblur and generate high frame rate video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Decoupled weight decay regularization",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Glu variants improve transformer",
            "source": "crossref"
        },
        {
            "title": "Motion de-blurring with real events",
            "source": "crossref"
        },
        {
            "title": "Video frame interpolation without temporal priors",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset provides 21 sequences, including dynamic
scenes and extreme blurs. 13 sequences were used for training and 8 sequences for the test set. The image and event resolution is 1024×768. The dataset contains typical urban scenes encompassing diverse motion modes, including ego-motion, object motion, and a combination of both.

Training dataset: [Download link](https://drive.google.com/drive/folders/1nu84bu_rLnUz-HQZirtlAqd0fMFvcm6K?usp=drive_link)
Testing dataset: [Download link](https://drive.google.com/drive/folders/11a5NG4RwmbVxlSdxiU0MGrF46U6Lj09b?usp=drive_link)
