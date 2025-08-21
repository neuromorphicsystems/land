---
{
    "name": "DVS-LRW100",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Lip-reading"
    ],
    "description": "Lip Reading",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Paper in early access. No dataset link found in paper",
        "dataset_links": []
    },
    "paper": {
        "title": "Tackling Event-Based Lip-Reading by Exploring Multigrained Spatiotemporal Clues",
        "doi": "10.1109/TNNLS.2024.3440495",
        "authors": [
            "Ganchao Tan",
            "Zengyu Wan",
            "Yang Wang",
            "Yang Cao",
            "Zheng-Jun Zha"
        ],
        "abstract": "Automatic lip-reading (ALR) is the task of recognizing words based on visual information obtained from the speaker\u2019s lip movements. In this study, we introduce event cameras, a novel type of sensing device, for ALR. Event cameras offer both technical and application advantages over conventional cameras for ALR due to their higher temporal resolution, less redundant visual information, and lower power consumption. To recognize words from the event data, we propose a novel multigrained spatiotemporal features learning framework, which is capable of perceiving fine-grained spatiotemporal features from microsecond time-resolved event data. Specifically, we first convert the event data into event frames of multiple temporal resolutions to avoid losing too much visual information at the event representation stage. Then, they are fed into a multibranch subnetwork where the branch operating on low-rate frames can perceive spatially complete but temporally coarse features, while the branch operating on high frame rate can perceive spatially coarse but temporally fine features. Thus, fine-grained spatial and temporal features can be simultaneously learned by integrating the features perceived by different branches. Furthermore, to model the temporal relationships in the event stream, we design a temporal aggregation subnetwork to aggregate the features perceived by the multibranch subnetwork. In addition, we collect two event-based lip-reading datasets (DVS-Lip and DVS-LRW100) for the study of the event-based lip-reading task. Experimental results demonstrate the superiority of the proposed model over the state-of-the-art event-based action recognition models and video-based lip-reading models.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-07-14T08:12:20.132515"
        },
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-07-14T08:12:20.538136"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10682067"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "LRW",
        "num_classes": "100",
        "num_recordings": "107644",
        "languge": "Chinese"
    },
    "connected_datasets": [
        "DVS-Lip"
    ],
    "bibtex": {
        "pages": "1--13",
        "year": 2024,
        "author": "Tan, Ganchao and Wan, Zengyu and Wang, Yang and Cao, Yang and Zha, Zheng-Jun",
        "journal": "IEEE Transactions on Neural Networks and Learning Systems",
        "urldate": "2024-09-24",
        "language": "en",
        "doi": "10.1109/TNNLS.2024.3440495",
        "url": "https://ieeexplore.ieee.org/document/10682067/",
        "issn": "2162-237X, 2162-2388",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "Tackling {Event}-{Based} {Lip}-{Reading} by {Exploring} {Multigrained} {Spatiotemporal} {Clues}",
        "type": "article",
        "key": "tan_tackling_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01728",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2015.116",
            "source": "crossref"
        },
        {
            "doi": "10.1097/AUD.0b013e31812f7185",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3023597",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00199",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3054886",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-21074-8_35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BIOCAS.2017.8325188",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00124",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01946",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-54184-6_6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP.2002.5745028",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG.2019.8756582",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.367",
            "source": "crossref"
        },
        {
            "doi": "10.21437/interspeech.2019-1669",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP40776.2020.9053841",
            "source": "crossref"
        },
        {
            "doi": "10.1109/FG47880.2020.00132",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2759326",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2785272",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00587",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACVW50321.2020.9096944",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TII.2022.3195063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2021.3061122",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICARM54641.2022.9959313",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.2966058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2018.2807983",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20062-5_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3325230",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-023-01919-2",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OE.520808",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2019.2945630",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2021.3124580",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00344",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arXiv.1706.02413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW50498.2020.00049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV53792.2021.00030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.502",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01931",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10844-016-0438-z",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-11755-3_3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00630",
            "source": "crossref"
        },
        {
            "doi": "10.48550/arxiv.1710.09412",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00431",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ins.2024.120660",
            "source": "crossref"
        },
        {
            "doi": "10.1002/aisy.202400265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW63382.2024.00219",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01301",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
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
            "doi": "10.1109/ICCV.2017.74",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3145053",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3093870",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "Audio visual speech recognition",
            "source": "crossref"
        },
        {
            "title": "SLAYER: Spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "Deep residual learning in spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Empirical evaluation of gated recurrent neural networks on sequence modeling",
            "source": "crossref"
        },
        {
            "title": "The challenge of multispeaker lip-reading",
            "source": "crossref"
        },
        {
            "title": "Learn an effective lip reading model without pains",
            "source": "crossref"
        },
        {
            "title": "Visualizing data using t-SNE",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "SGDR: Stochastic gradient descent with warm restarts",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Converted from the LRW dataset
- Contains 100 classes
- Contains 107644 recordings
- Dataset language is Chinese

### Dataset Comparison Table

| Dataset   | Classes | Speakers | Utterances | Language | Source                    |
| --------- | ------- | -------- | ---------- | -------- | ------------------------- |
| MIRACL-VC | 10      | 15       | 1,500      | English  | Recorded by RGB-D Camera  |
| MODALITY  | 182     | 35       | 231        | English  | Recorded by stereo camera |
| LRW       | 500     | 1,000+   | 550,000    | English  | Crawling from TV programs |
| LRW1000   | 1,000   | 2,000+   | 745,187    | Chinese  | Crawling from TV programs |
| DVS-Lip   | 100     | 40       | 19,871     | English  | Recorded by event camera  |
