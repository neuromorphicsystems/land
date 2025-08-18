---
{
    "name": "THU-HSEVI",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "MIKROTRON EoSens 1.1CXP2",
        "Thorlabs CCM1BS013"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Beamsplitters",
        "High-Speed Video Reconstruction"
    ],
    "task": "Frame/Event Fusion (Frame interpolation)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
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
                "url": "https://pan.baidu.com/s/13GVxDUc_81_DedRnIHIFSA",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 0.956,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "SuperFast: 200\u00d7 Video Frame Interpolation via Event Camera",
        "doi": "10.1109/TPAMI.2022.3224051",
        "authors": [
            "Yue Gao",
            "Siqi Li",
            "Yipeng Li",
            "Yandong Guo",
            "Qionghai Dai"
        ],
        "abstract": "Traditional frame-based video frame interpolation (VFI) methods rely on the linear motion assumption and brightness invariance assumption, which may lead to fatal errors confronting the scenarios with high-speed motions. To tackle the above challenge, inspired by the advantages of event cameras on asynchronously recording brightness changes at each pixel, we propose a Fast-Slow joint synthesis framework for event-enhanced high-speed video frame interpolation, named SuperFast, in this paper, which can generate high frame rate (5000 FPS, 200\u00c2 faster) video from the input low frame rate (25 FPS) video and the corresponding event stream. In our framework, the task is divided into two sub-tasks, i.e., video frame interpolation for the contents with and without highspeed motions, which are tackled by two corresponding branches, i.e., the fast synthesis pathway and the slow synthesis pathway. The fast synthesis pathway leverages a spiking neural network to encode the input event stream, and combines boundary frames to generate intermediate results through synthesis and re\ufb01nement, targeting on contents with high-speed motions. The slow synthesis pathway stacks the two input boundary frames and the event stream to synthesize intermediate results, focusing on relatively slowmotion contents. Finally, a fusion module with a comparison loss is utilized to generate the \ufb01nal video frame interpolation results. We also build a hybrid visual acquisition system containing an event camera and a high frame rate camera, and collect the \ufb01rst 5000 FPS High-Speed Event-enhanced Video frame Interpolation (THUHSEVI) dataset. To evaluate the performance of our proposed framework, we have conducted experiments on our THUHSEVI dataset and the existing HS-ERGB dataset. Experimental results demonstrate that our proposed framework can achieve state-of-the-art 200\u00c2 video frame interpolation performance under high-speed motion scenarios.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 22,
            "updated": "2025-06-12T16:49:41.076818"
        },
        {
            "source": "scholar",
            "count": 32,
            "updated": "2025-06-12T16:49:40.936123"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9962797"
        },
        {
            "type": "project_page",
            "url": "https://www.gaoyue.org/data/THU-HSEVI"
        },
        {
            "type": "github_page",
            "url": "https://github.com/lisiqi19971013/SuperFast"
        }
    ],
    "full_name": "High-Speed Event-Enhanced Video Frame Interpolation (HSEVI)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "7764--7780",
        "year": 2023,
        "month": "jun",
        "author": "Gao, Yue and Li, Siqi and Li, Yipeng and Guo, Yandong and Dai, Qionghai",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-04-13",
        "number": "6",
        "language": "en",
        "doi": "10.1109/TPAMI.2022.3224051",
        "url": "https://ieeexplore.ieee.org/document/9962797/",
        "shorttitle": "{SuperFast}",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "45",
        "title": "{SuperFast}: 200\u00d7 {Video} {Frame} {Interpolation} via {Event} {Camera}",
        "type": "article",
        "key": "gao_superfast_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00183",
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
            "doi": "10.1109/CVPR.2019.00382",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/jssc.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-020-01410-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.37",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.244",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00142",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00768",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1017/cbo9780511815706",
            "source": "crossref"
        },
        {
            "doi": "10.1103/PhysRevE.51.738",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i02.5486",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2903179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197133",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01401",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP40776.2020.9053987",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Slayer: Spike Layer Error Reassignment in Time",
            "source": "crossref"
        },
        {
            "title": "Self-supervised learning of event-based optical flow with spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Instance normalization: The missing ingredient for fast stylization",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
