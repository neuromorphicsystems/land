---
{
    "name": "THU-ACT-50",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "CeleX-V",
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Human Pose Recognition",
        "Human Action Recognition"
    ],
    "task": "Action Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "OneDrive",
            "Baidu"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "OneDrive",
                "url": "https://mailstsinghuaeducn-my.sharepoint.com/:u:/g/personal/lujx20_mails_tsinghua_edu_cn/EVAfzCmMfH9KtQhHh37hCFIBXrszDqLXtOfjBir2__GTjg?e=rnUht0",
                "format": "CSV",
                "available": true
            },
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1ohCswORXFMyEho3A6nKnSg",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 332.0,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Action Recognition and Benchmark Using Event Cameras",
        "doi": "10.1109/TPAMI.2023.3300741",
        "authors": [
            "Yue Gao",
            "Jiaxuan Lu",
            "Siqi Li",
            "Nan Ma",
            "Shaoyi Du",
            "Yipeng Li",
            "Qionghai Dai"
        ],
        "abstract": "Recent years have witnessed remarkable achievements in video-based action recognition. Apart from traditional frame-based cameras, event cameras are bio-inspired vision sensors that only record pixel-wise brightness changes rather than the brightness value. However, little effort has been made in eventbased action recognition, and large-scale public datasets are also nearly unavailable. In this paper, we propose an event-based action recognition framework called EV-ACT. The Learnable MultiFused Representation (LMFR) is first proposed to integrate multiple event information in a learnable manner. The LMFR with dual temporal granularity is fed into the event-based slow-fast network for the fusion of appearance and motion features. A spatialtemporal attention mechanism is introduced to further enhance the learning capability of action recognition. To prompt research in this direction, we have collected the largest event-based action recognition benchmark named THUE-ACT-50 and the accompanying THUE-ACT-50-CHL dataset under challenging environments, including a total of over 12,830 recordings from 50 action categories, which is over 4 times the size of the previous largest dataset. Experimental results show that our proposed framework could achieve improvements of over 14.5\\%, 7.6\\%, 11.2\\%, and 7.4\\% compared to previous works on four benchmarks. We have also deployed our proposed EV-ACT framework on a mobile platform to validate its practicality and ef\ufb01ciency.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 16,
            "updated": "2025-06-26T10:55:31.603816"
        },
        {
            "source": "scholar",
            "count": 36,
            "updated": "2025-06-26T10:55:30.761620"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10198747"
        },
        {
            "type": "github_page",
            "url": "https://github.com/lujiaxuan0520/THU-EACT-50"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "50",
        "num_subjects": "105",
        "sensor_resolution": "1280 x 800",
        "stereo": false
    },
    "connected_datasets": [
        "THU-ACT-50-CHL",
        "THU-MV-EACT-50"
    ],
    "bibtex": {
        "pages": "14081--14097",
        "year": 2023,
        "month": "dec",
        "author": "Gao, Yue and Lu, Jiaxuan and Li, Siqi and Ma, Nan and Du, Shaoyi and Li, Yipeng and Dai, Qionghai",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-04-13",
        "number": "12",
        "language": "en",
        "doi": "10.1109/TPAMI.2023.3300741",
        "url": "https://ieeexplore.ieee.org/document/10198747/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "45",
        "title": "Action {Recognition} and {Benchmark} {Using} {Event} {Cameras}",
        "type": "article",
        "key": "gao_action_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/cvpr.2016.115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.502",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46448-0_31",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ESSDERC.2016.7599576",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnbot.2019.00038",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00217",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2019.8702581",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/240",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2986748",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-022-01594-9",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-005-1838-7",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0846-5",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1291233.1291311",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2007.383299",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2011.5995353",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-010-0384-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.510",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00718",
            "source": "crossref"
        },
        {
            "doi": "10.1142/S0129065709002002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00444",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11633-022-1350-3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCI.2019.2948787",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593805",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3172212",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2004.1334462",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVMP.2009.19",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc.2011.5746374",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01442",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2010.240",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00508",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-642-24958-7_83",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865228",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2019.2945630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.264",
            "source": "crossref"
        },
        {
            "doi": "10.1109/34.232073",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00209",
            "source": "crossref"
        },
        {
            "title": "UCF101: A dataset of 101 human actions classes from videos in the wild",
            "source": "crossref"
        },
        {
            "title": "A 240\u00d7 180 10mw 12us latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "An exponential learning rate schedule for deep learning",
            "source": "crossref"
        },
        {
            "title": "Pytorch: An imperative style, high-performance deep learning library",
            "source": "crossref"
        },
        {
            "title": "UniFormer: Unified transformer for efficient spatiotemporal representation learning",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

### Standard THU-ACT-50
- 50 event-specific action categories
- 105 socially recruited subjects
- 10,500 video recordings
- CeleX-V event camera with a spatial resolution of 1280 x 800 
- Two oblique front views of the actor
- Download size: 93.3 Gb

|D|Action|ID|Action|ID|Action|ID|Action|ID|Action|
|---|---|---|---|---|---|---|---|---|---|
|A0|Walking|A10|Cross arms|A20|Calling with phone|A30|Fan|A40|Check time|
|A1|Running|A11|Salute|A21|Reading|A31|Open umbrella|A41|Drink water|
|A2|Jump up|A12|Squat down|A22|Tai chi|A32|Close umbrella|A42|Wipe face|
|A3|Running in circles|A13|Sit down|A23|Swing objects|A33|Put on glasses|A43|Long jump|
|A4|Falling down|A14|Stand up|A24|Throw|A34|Take off glasses|A44|Push up|
|A5|Waving one hand|A15|Sit and stand|A25|Staggering|A35|Pick up|A45|Sit up|
|A6|Waving two hands|A16|Knead face|A26|Headache|A36|Put on bag|A46|Shake hands (two-players)|
|A7|Clap|A17|Nod head|A27|Stomachache|A37|Take off bag|A47|Fighting (two-players)|
|A8|Rub hands|A18|Shake head|A28|Back pain|A38|Put object into bag|A48|Handing objects (two-players)|
|A9|Punch|A19|Thumb up|A29|Vomit|A39|Take object out of bag|A49|Lifting chairs (two-players)|