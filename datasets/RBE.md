---
{
    "name": "RBE",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring"
    ],
    "description": "Image de-blurring",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "Motion Deblurring with Real Events",
        "doi": "10.1109/ICCV48922.2021.00258",
        "authors": [
            "Fang Xu",
            "Lei Yu",
            "Bishan Wang",
            "Wen Yang",
            "Gui-Song Xia",
            "Xu Jia",
            "Zhendong Qiao",
            "Jianzhuang Liu"
        ],
        "abstract": "In this paper, we propose an end-to-end learning framework for event-based motion deblurring in a self-supervised manner, where real-world events are exploited to alleviate the performance degradation caused by data inconsistency. To achieve this end, optical flows are predicted from events, with which the blurry consistency and photometric consistency are exploited to enable self-supervision on the deblurring network with real-world data. Furthermore, a piece-wise linear motion model is proposed to take into account motion non-linearities and thus leads to an accurate model for the physical formation of motion blurs in the real-world scenario. Extensive evaluation on both synthetic and real motion blur datasets demonstrates that the proposed algorithm bridges the gap between simulated and real-world motion blurs and shows remarkable performance for event-based motion deblurring in real-world scenarios.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 69,
            "updated": "2025-07-08T07:19:04.949650"
        },
        {
            "source": "scholar",
            "count": 123,
            "updated": "2025-07-08T07:19:04.678727"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2109.13695"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9710726"
        },
        {
            "type": "project_page",
            "url": "https://dvs-whu.cn/projects/red/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/xufangchn/Motion-Deblurring-with-Real-Events"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "2563--2572",
        "year": 2021,
        "month": "oct",
        "author": "Xu, Fang and Yu, Lei and Wang, Bishan and Yang, Wen and Xia, Gui-Song and Jia, Xu and Qiao, Zhendong and Liu, Jianzhuang",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{CVF} {International} {Conference} on {Computer} {Vision} ({ICCV})",
        "urldate": "2024-12-02",
        "language": "en",
        "doi": "10.1109/ICCV48922.2021.00258",
        "url": "https://ieeexplore.ieee.org/document/9710726/",
        "isbn": "978-1-66542-812-5",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Motion {Deblurring} with {Real} {Events}",
        "address": "Montreal, QC, Canada",
        "type": "inproceedings",
        "key": "xu_motion_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2013.147",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPhot.2013.6528301",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00257",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00830",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00663",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2011.5995521",
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
            "doi": "10.1109/LRA.2020.2972873",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.37",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2018.8368468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW50498.2020.00263",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1141911.1141956",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299181",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00177",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.509",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00699",
            "source": "crossref"
        },
        {
            "title": "Event enhanced high-quality image recovery",
            "source": "crossref"
        },
        {
            "title": "Learning event-driven video deblurring and interpolation",
            "source": "crossref"
        },
        {
            "title": "Ntire 2019 challenge on video deblurring and superresolution: Dataset and study",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "Reducing the sim-to-real gap for event cameras",
            "source": "crossref"
        },
        {
            "title": "Understanding the Performance of Neuromorphic Event-Based Vision Sensors",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
