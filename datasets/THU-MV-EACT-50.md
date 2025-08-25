---
{
    "name": "THU-MV-EACT-50",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "CeleX-V"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Human Action Recognition"
    ],
    "description": "Human Activity Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://download.moon-lab.tech:20443/datasets/THU-MV-EACT-50.tar.gz",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 302.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Hypergraph-Based Multi-View Action Recognition Using Event Cameras",
        "doi": "10.1109/TPAMI.2024.3382117",
        "authors": [
            "Yue Gao",
            "Jiaxuan Lu",
            "Siqi Li",
            "Yipeng Li",
            "Shaoyi Du"
        ],
        "abstract": "Action recognition from video data forms a cornerstone with wide-ranging applications. Single-view action recognition faces limitations due to its reliance on a single viewpoint. In contrast, multi-view approaches capture complementary information from various viewpoints for improved accuracy. Recently, event cameras have emerged as innovative bio-inspired sensors, leading to advancements in event-based action recognition. However, existing works predominantly focus on single-view scenarios, leaving a gap in multi-view event data exploitation, particularly in challenges like information deficit and semantic misalignment. To bridge this gap, we introduce HyperMV , a multi-view event-based action recognition framework. HyperMV converts discrete event data into frame-like representations and extracts view-related features using a shared convolutional network. By treating segments as vertices and constructing hyperedges using rule-based and KNN-based strategies, a multi-view hypergraph neural network that captures relationships across viewpoint and temporal features is established. The vertex attention hypergraph propagation is also introduced for enhanced feature fusion. To prompt research in this area, we present the largest multi-view event-based action dataset THUMV\u2212EACT\u221250 , comprising 50 actions from 6 viewpoints, which surpasses existing datasets by over tenfold. Experimental results show that HyperMV significantly outperforms baselines in both cross-subject and cross-view scenarios, and also exceeds the state-of-the-arts in frame-based multi-view action recognition.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 4,
            "updated": "2025-06-13T12:03:04.186340"
        },
        {
            "source": "scholar",
            "count": 15,
            "updated": "2025-06-13T12:03:01.626206"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2403.19316"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10480584"
        },
        {
            "type": "github_page",
            "url": "https://github.com/lujiaxuan0520/THU-MV-EACT-50"
        }
    ],
    "full_name": "Multi-View Event-Based Action Recognition Benchmark (MV-EACT)",
    "additional_metadata": {
        "num_subjects": "105",
        "num_classes": "50",
        "num_viewpoints": "6",
        "stereo": false
    },
    "bibtex": {
        "pages": "6610--6622",
        "year": 2024,
        "month": "oct",
        "author": "Gao, Yue and Lu, Jiaxuan and Li, Siqi and Li, Yipeng and Du, Shaoyi",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-12-14",
        "number": "10",
        "language": "en",
        "doi": "10.1109/TPAMI.2024.3382117",
        "url": "https://ieeexplore.ieee.org/document/10480584/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "46",
        "title": "Hypergraph-{Based} {Multi}-{View} {Action} {Recognition} {Using} {Event} {Cameras}",
        "type": "article",
        "key": "gao_hypergraph-based_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2017.502",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46448-0_31",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9197197",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3582272",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-022-01594-9",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-015-0846-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00209",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00298",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01240-3_28",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ESSDERC.2016.7599576",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2019.2945630",
            "source": "crossref"
        },
        {
            "doi": "10.24963/ijcai.2021/240",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS45731.2020.9181247",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3300741",
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
            "doi": "10.1109/CVPR.2018.00151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299059",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00718",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.510",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2015.522",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46484-8_2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.213",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2011.52",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2013.394",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298708",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2019.12.151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV56688.2023.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00631",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.imavis.2021.104357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc.2011.5746374",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICPR48806.2021.9412991",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WF-IoT48130.2020.9221355",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2005.1555942",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNN.2008.2005605",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1606.09375",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-66182-7_54",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3039374",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.11782",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3219819.3219980",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v28i1.8916",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TKDE.2021.3108192",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i04.5731",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DICTA.2011.77",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s22197640",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.imavis.2020.104068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2023.3236144",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46478-7_23",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.12328",
            "source": "crossref"
        },
        {
            "doi": "10.7551/mitpress/7503.003.0205",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v33i01.33013558",
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
            "doi": "10.1109/CVPR.2014.339",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2916873",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3132734.3132739",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3240508.3240675",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS45743.2020.9341160",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01931",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2012.2230553",
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
            "doi": "10.1109/TPAMI.2022.3224051",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
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
            "doi": "10.1109/TPAMI.2020.2986748",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.16",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
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
            "doi": "10.1007/978-3-030-01240-3_9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV56688.2023.00553",
            "source": "crossref"
        },
        {
            "title": "A 240\u00d7 180 10mw 12us latency sparse-output vision sensor for mobile applications",
            "source": "crossref"
        },
        {
            "title": "Two-stream convolutional networks for action recognition in videos",
            "source": "crossref"
        },
        {
            "title": "Learning discriminative representations from RGB-D video data",
            "source": "crossref"
        },
        {
            "title": "Parameter-free auto-weighted multiple graph learning: A framework for multiview clustering and semi-supervised classification",
            "source": "crossref"
        },
        {
            "title": "Collaborative attention mechanism for multi-view action recognition",
            "source": "crossref"
        },
        {
            "title": "Spatiotemporal filtering for event-based action recognition",
            "source": "crossref"
        },
        {
            "title": "Convolutional networks on graphs for learning molecular fingerprints",
            "source": "crossref"
        },
        {
            "title": "G-mixup: Graph data augmentation for graph classification",
            "source": "crossref"
        },
        {
            "title": "Graph clustering with graph neural networks",
            "source": "crossref"
        },
        {
            "title": "Neural Bellman-Ford networks: A general graph neural network framework for link prediction",
            "source": "crossref"
        },
        {
            "title": "UCF101: A dataset of 101 human actions classes from videos in the wild",
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
        }
    ]
}
---

### Dataset Structure

- Dataset contains data from 105 subjects
- Dataset contains 50 different categories of recording
- Each recording contains data from 6 different sensors

The event data is provided in the .csv format, the data is structured with 5 columns as follows:

- y: Represents the y-coordinate of the event.
- x: Represents the x-coordinate of the event.
- b: This is an additional brightness value provided by the CeleX-V camera. It's worth noting that for our method, this value is not utilized.
- p: The polarity value. It contains three categories: 1, -1, and 0. In our experiments, we ignore the 0 values and consider 1 as positive polarity and -1 as negative polarity.
- t: Represents the timestamp of the event.

## List of Actions

| ID  | Action             | ID  | Action        | ID  | Action             | ID  | Action                 | ID  | Action                        |
| --- | ------------------ | --- | ------------- | --- | ------------------ | --- | ---------------------- | --- | ----------------------------- |
| A0  | Walking            | A10 | Cross arms    | A20 | Calling with phone | A30 | Fan                    | A40 | Check time                    |
| A1  | Running            | A11 | Salute        | A21 | Reading            | A31 | Open umbrella          | A41 | Drink water                   |
| A2  | Jump up            | A12 | Squat down    | A22 | Tai chi            | A32 | Close umbrella         | A42 | Wipe face                     |
| A3  | Running in circles | A13 | Sit down      | A23 | Swing objects      | A33 | Put on glasses         | A43 | Long jump                     |
| A4  | Falling down       | A14 | Stand up      | A24 | Throw              | A34 | Take off glasses       | A44 | Push up                       |
| A5  | Waving one hand    | A15 | Sit and stand | A25 | Staggering         | A35 | Pick up                | A45 | Sit up                        |
| A6  | Waving two hands   | A16 | Knead face    | A26 | Headache           | A36 | Put on bag             | A46 | Shake hands (two-players)     |
| A7  | Clap               | A17 | Nod head      | A27 | Stomachache        | A37 | Take off bag           | A47 | Fighting (two-players)        |
| A8  | Rub hands          | A18 | Shake head    | A28 | Back pain          | A38 | Put object into bag    | A48 | Handing objects (two-players) |
| A9  | Punch              | A19 | Thumb up      | A29 | Vomit              | A39 | Take object out of bag | A49 | Lifting chairs (two-players)  |
