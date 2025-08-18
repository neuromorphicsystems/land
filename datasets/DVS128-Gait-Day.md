---
{
    "name": "DVS128-Gait-Day",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVS128"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Gait Recognition"
    ],
    "task": "Gait Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "https://pan.baidu.com/s/1F3Uo-fVy1S7n5plmEXFl4w",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1F3Uo-fVy1S7n5plmEXFl4w",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 0.5,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Stream Representation for Human Gaits Identification Using Deep Neural Networks",
        "doi": "10.1109/TPAMI.2021.3054886",
        "authors": [
            "Yanxiang Wang",
            "Xian Zhang",
            "Yiran Shen",
            "Bowen Du",
            "Guangrong Zhao",
            "Lizhen Cui Cui Lizhen",
            "Hongkai Wen"
        ],
        "abstract": "Dynamic vision sensors (event cameras) have recently been introduced to solve a number of different vision tasks such as object recognition, activities recognition, tracking, etc. Compared with the traditional RGB sensors, the event cameras have many unique advantages such as ultra low resources consumption, high temporal resolution and much larger dynamic range. However, these cameras only produce noisy and asynchronous events of intensity changes, i.e., event-streams rather than frames, where conventional computer vision algorithms can't be directly applied. In our opinion the key challenge for improving the performance of event cameras in vision tasks is finding the appropriate representations of the event-streams so that cutting-edge learning approaches can be applied to fully uncover the spatio-temporal information contained in the event-streams. In this paper, we focus on the event-based human gait identification task and investigate the possible representations of the event-streams when deep neural networks are applied as the classifier. We propose new event-based gait recognition approaches basing on two different representations of the event-stream, i.e., graph and image-like representations, and use graph-based convolutional network (GCN) and convolutional neural networks (CNN) respectively to recognize gait from the event-streams. The two approaches are termed as EV-Gait-3DGraph and EV-Gait-IMG. To evaluate the performance of the proposed approaches, we collect two event-based gait datasets, one from real-world experiments and the other by converting the publicly available RGB gait recognition benchmark CASIA-B. Extensive experiments show that EV-Gait-3DGraph achieves significantly higher recognition accuracy than other competing methods when sufficient training samples are available. However, EV-Gait-IMG converges more quickly than graph-based approaches while training and shows good accuracy with only few number of training samples (less than ten). So image-like presentation is preferable when the amount of training data is limited.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 28,
            "updated": "2025-06-30T13:02:58.553581"
        },
        {
            "source": "scholar",
            "count": 90,
            "updated": "2025-06-30T13:02:58.071547"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9337225"
        },
        {
            "type": "github_page",
            "url": "https://github.com/zhangxiann/TPAMI_Gait_Identification"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "20",
        "num_males": "14",
        "num_females": "6"
    },
    "connected_datasets": [
        "DVS128-Gait-Night"
    ],
    "bibtex": {
        "pages": "1--1",
        "year": 2021,
        "author": "Wang, Yanxiang and Zhang, Xian and Shen, Yiran and Du, Bowen and Zhao, Guangrong and Cui Lizhen, Lizhen Cui and Wen, Hongkai",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-09-12",
        "language": "en",
        "doi": "10.1109/TPAMI.2021.3054886",
        "url": "https://ieeexplore.ieee.org/document/9337225/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Event-{Stream} {Representation} for {Human} {Gaits} {Identification} {Using} {Deep} {Neural} {Networks}",
        "type": "article",
        "key": "wang_event-stream_2021"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.5244/c.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7169170",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ECMR.2015.7324048",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2009.5117867",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.conb.2010.03.007",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2006.38",
            "source": "crossref"
        },
        {
            "doi": "10.1109/AFGR.2002.1004148",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2003.1251144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2007.1096",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2545669",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICB.2016.7550060",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2016.7533144",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.cviu.2017.10.004",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2004.1333741",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.815251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2015.7350936",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3023597",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICFSP.2016.7802963",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.2978386",
            "source": "crossref"
        },
        {
            "doi": "10.5555/3157382.3157527",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00097",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.576",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2012.2235192",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNN.2008.2010350",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2751541",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.556",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00178",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00933",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9561110",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00653",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00810",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s001700170075",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.11",
            "source": "crossref"
        },
        {
            "doi": "10.5555/3104322.3104425",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3065386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.169",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.5555/3454287.3455008",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2017.369",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR.2006.67",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2010.10.011",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TSMCB.2009.2031091",
            "source": "crossref"
        },
        {
            "doi": "10.1049/ic.2009.0230",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2012.2186744",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "title": "A 240\u00d7 180 10mW 12us latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        },
        {
            "title": "Spectral networks and locally connected networks on graphs",
            "source": "crossref"
        },
        {
            "title": "Diffusion-convolutional neural networks",
            "source": "crossref"
        },
        {
            "title": "Faster R-CNN: Towards real-time object detection with region proposal networks",
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

- Contains 20 subjects (14 males and 6 females)
