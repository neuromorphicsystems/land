---
{
    "name": "ED-KoGTL",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "subcategory": [
        "De-noising"
    ],
    "task": "Denoising Technique",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://github.com/Yusra-alkendi/ED-KoGTL",
                "format": "Matlab",
                "available": true
            }
        ],
        "size_gb": 0.024,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "Neuromorphic Camera Denoising Using Graph Neural Network-Driven Transformers",
        "doi": "10.1109/TNNLS.2022.3201830",
        "authors": [
            "Yusra Alkendi",
            "Rana Azzam",
            "Abdulla Ayyad",
            "Sajid Javed",
            "Lakmal Seneviratne",
            "Yahya Zweiri"
        ],
        "abstract": "Neuromorphic vision is a bio-inspired technology that has triggered a paradigm shift in the computer vision community and is serving as a key enabler for a wide range of applications. This technology has offered signi\ufb01cant advantages, including reduced power consumption, reduced processing needs, and communication speedups. However, neuromorphic cameras suffer from signi\ufb01cant amounts of measurement noise. This noise deteriorates the performance of neuromorphic event-based perception and navigation algorithms. In this article, we propose a novel noise \ufb01ltration algorithm to eliminate events that do not represent real log-intensity variations in the observed scene. We employ a graph neural network (GNN)-driven transformer algorithm, called GNN-Transformer, to classify every active event pixel in the raw stream into real log-intensity variation or noise. Within the GNN, a message-passing framework, referred to as EventConv, is carried out to re\ufb02ect the spatiotemporal correlation among the events while preserving their asynchronous nature. We also introduce the known-object ground-truth labeling (KoGTL) approach for generating approximate ground-truth labels of event streams under various illumination conditions. KoGTL is used to generate labeled datasets, from experiments recorded in challenging lighting conditions, including moon light. These datasets are used to train and extensively test our proposed algorithm. When tested on unseen datasets, the proposed algorithm outperforms state-of-the-art methods by at least 8.8\\% in terms of \ufb01ltration accuracy. Additional tests are also conducted on publicly available datasets (ETH Z\u00fcrich Color-DAVIS346 datasets) to demonstrate the generalization capabilities of the proposed algorithm in the presence of illumination variations and different motion dynamics. Compared to state-of-the-art solutions, qualitative results veri\ufb01ed the superior capability of the proposed algorithm to eliminate noise while preserving meaningful events in the scene.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 30,
            "updated": "2025-06-16T11:58:30.898462"
        },
        {
            "source": "scholar",
            "count": 37,
            "updated": "2025-06-16T11:58:30.737076"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2112.09685"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9893571"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Yusra-alkendi/ED-KoGTL"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_samples": "8000",
        "stereo": false
    },
    "bibtex": {
        "pages": "4110--4124",
        "year": 2024,
        "month": "mar",
        "author": "Alkendi, Yusra and Azzam, Rana and Ayyad, Abdulla and Javed, Sajid and Seneviratne, Lakmal and Zweiri, Yahya",
        "journal": "IEEE Transactions on Neural Networks and Learning Systems",
        "urldate": "2024-04-13",
        "number": "3",
        "language": "en",
        "doi": "10.1109/TNNLS.2022.3201830",
        "url": "https://ieeexplore.ieee.org/document/9893571/",
        "issn": "2162-237X, 2162-2388",
        "copyright": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "volume": "35",
        "title": "Neuromorphic {Camera} {Denoising} {Using} {Graph} {Neural} {Network}-{Driven} {Transformers}",
        "type": "article",
        "key": "alkendi_neuromorphic_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1155/2007/82174",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.15607/rss.2018.xiv.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS40897.2019.8968520",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10845-021-01887-9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3071261",
            "source": "crossref"
        },
        {
            "doi": "10.1109/lra.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2021.3070843",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tnnls.2021.3086066",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.2978386",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3505244",
            "source": "crossref"
        },
        {
            "doi": "10.48550/ARXIV.1706.03762",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP39728.2021.9414123",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00177",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app10062024",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tetc.2017.2788865",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7168735",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i1.19906",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ASP-DAC47756.2020.9045268",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01175",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tnnls.2021.3071369",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.aiopen.2021.01.001",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3326362",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3084599",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58452-8_13",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMI.2019.2905990",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.1986.4767851",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10589-014-9643-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA48506.2021.9560881",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA40945.2020.9196877",
            "source": "crossref"
        },
        {
            "doi": "10.1109/tim.2022.3217513",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2020.2985815",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCYB.2022.3164882",
            "source": "crossref"
        },
        {
            "title": "AMMUS: A survey of transformer-based pretrained models in natural language processing",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "A noise filter for dynamic vision sensors using self-adjusting threshold",
            "source": "crossref"
        },
        {
            "title": "Time-ordered recent event (TORE) volumes for event cameras",
            "source": "crossref"
        },
        {
            "title": "Bridging the gap between spatial and spectral domains: A survey on graph neural networks",
            "source": "crossref"
        },
        {
            "title": "A message-passing algorithm for graph isomorphism",
            "source": "crossref"
        },
        {
            "title": "Neural machine translation by jointly learning to align and translate",
            "source": "crossref"
        },
        {
            "title": "Layer normalization",
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

A total of 8000 were selected from each of 5 scenes (4000 real-activity events and 4000 noise). The samples were recorded under different lighting: very good lightning (~ 750 lux) and low light condition (~ 5 lux).