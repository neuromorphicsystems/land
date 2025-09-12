---
{
    "name": "SDE",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Low Light Reconstruction"
    ],
    "description": "Low-light Image Enhancement Dataset",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive",
            "Baidu"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1ad56IgSmCwDhorhwAwFlog?pwd=w7qe",
                "format": "Numpy",
                "available": true
            },
            {
                "name": "OneDrive",
                "url": "https://hkustgz-my.sharepoint.com/:f:/g/personal/gliang041_connect_hkust-gz_edu_cn/Ep_8Acz6cd1GjwtmEjAG0w8BkQsBWDjyHf9_56XSLTNLSw",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 39.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Towards Robust Event-guided Low-Light Image Enhancement: A Large-Scale Real-World Event-Image Dataset and Novel Approach",
        "doi": "10.1109/CVPR52733.2024.00011",
        "authors": [
            "Guoqiang Liang",
            "Kanghao Chen",
            "Hangyu Li",
            "Yunfan Lu",
            "Lin Wang"
        ],
        "abstract": "Event camera has recently received much attention for low-light image enhancement (LIE) thanks to their distinct advantages, such as high dynamic range. However, current research is prohibitively restricted by the lack of large-scale, real-world, and spatial-temporally aligned event-image datasets. To this end, we propose a real-world (indoor and outdoor) dataset comprising over 30K pairs of images and events under both low and normal illumination conditions. To achieve this, we utilize a robotic arm that traces a consistent non-linear trajectory to curate the dataset with spatial alignment precision under 0.03mm. We then introduce a matching alignment strategy, rendering 90% of our dataset with errors less than 0.01s. Based on the dataset, we propose a novel event-guided LIE approach, called EvLight, towards robust performance in real-world low-light scenes. Specifically, we first design the multiscale holistic fusion branch to extract holistic structural and textural information from both events and images. To ensure robustness against variations in the regional illumination and noise, we then introduce a Signal-to-Noise-Ratio (SNR)-guided regional feature selection to selectively fuse features of images from regions with high SNR and enhance those with low SNR by extracting regional structure information from events. Extensive experiments on our dataset and the synthetic SDSD dataset demonstrate our EvLight significantly surpasses the frame-based methods, e.g., [4] by 1.14 dB and 2.62 dB, respectively.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 16,
            "updated": "2025-09-13T07:30:00.847760"
        },
        {
            "source": "scholar",
            "count": 31,
            "updated": "2025-09-13T07:30:02.320637"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2024/papers/Liang_Towards_Robust_Event-guided_Low-Light_Image_Enhancement_A_Large-Scale_Real-World_Event-Image_CVPR_2024_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10655543"
        },
        {
            "type": "project_page",
            "url": "https://vlislab22.github.io/eg-lowlight/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/EthanLiang99/EvLight"
        }
    ],
    "full_name": "",
    "additional_metadata": {},
    "referenced_papers": [
        {
            "doi": "10.1109/TIP.2009.2021548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2005.38",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2011.5995413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00347",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00328",
            "source": "crossref"
        },
        {
            "doi": "10.1117/12.643267",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01738",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01183",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.304",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2016.2639450",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2010.579",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.355",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00742",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2023.3290432",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.jvcir.2023.103887",
            "source": "crossref"
        },
        {
            "doi": "10.5555/2999134.2999257",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00075",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3126387",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.00974",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v37i2.25257",
            "source": "crossref"
        },
        {
            "doi": "10.1023/b:visi.0000029664.99615.94",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00555",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISPACS.2013.6704591",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58595-2_12",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-24574-4_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00701",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00956",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00421",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01207",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01716",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00581",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00166",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.2974060",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00235",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01719",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.00954",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00392",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00564",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58523-5_39",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3343031.3350926",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-020-01407-x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW54120.2021.00135",
            "source": "crossref"
        },
        {
            "title": "Deep retinex decomposition for low-light enhancement",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Towards dynamic and small objects refinement for unsupervised domain adaptative nighttime semantic segmentation",
            "source": "crossref"
        },
        {
            "title": "Deep learning for event-based vision: A comprehensive survey and benchmarks",
            "source": "crossref"
        },
        {
            "title": "The multi vehicle stereo event camera dataset: An event camera dataset for 3d perception",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "23\u201333",
        "month": "jun",
        "year": 2024,
        "author": "Liang, Guoqiang and Chen, Kanghao and Li, Hangyu and Lu, Yunfan and Wang, Lin",
        "publisher": "IEEE",
        "booktitle": "2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
        "doi": "10.1109/cvpr52733.2024.00011",
        "url": "http://dx.doi.org/10.1109/CVPR52733.2024.00011",
        "title": "Towards Robust Event-guided Low-Light Image Enhancement: A Large-Scale Real-World Event-Image Dataset and Novel Approach",
        "type": "inproceedings",
        "key": "Liang_2024"
    }
}
---

# Dataset Structure

OneDrive files are distributed as 7zip files, arranged in the following structure:
- Indoor: 8.8 Gb
- Normal Light Event: 22.3 Gb
- Outdoor: 8.3 Gb

SED dataset contains 91 image+event paired sequences (43 indoor sequences and 48 outdoor sequences) captured with a DAVIS346 event camera which outputs RGB images and events with the resolution of 346*260.
For all collected sequences, 76 sequences are randomly selected for training, and 15 sequences are for testing. 

The arrangement of the dataset is
```
--indoor/outdoor 
| 
----test 
|   | 
|   ----pair1 
|       | 
|       ----low 
|       |   | 
|       |   ----xxx.png (low-light RGB frame) 
|       |   ----xxx.npz (split low-light event streams) 
|       |   ----lowligt_event.npz (the whole low-light event stream) 
|       | 
|       ----normal 
|           | 
|           ----xxx.png (normal-light RGB frame) 
| 
----train 
    | 
    ----pair1 
        | 
        ----low 
        |   | 
        |   ----xxx.png (low-light RGB frame) 
        |   ----xxx.npz (split low-light event streams) 
        |   ----lowligt_event.npz (the whole low-light event stream) 
        | 
        ----normal 
            | 
            ----xxx.png (normal-light RGB frame) 
```