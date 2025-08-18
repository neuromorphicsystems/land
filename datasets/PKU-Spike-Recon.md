---
{
    "name": "PKU-Spike-Recon",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Unknown"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "Super-resolution",
        "3D Reconstruction",
        "Beamsplitters"
    ],
    "task": "Super-resolution reconstruction",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "A signed form needs to be emailed to the authors to gain access to the data",
        "dataset_links": []
    },
    "paper": {
        "title": "Learning Super-Resolution Reconstruction for High Temporal Resolution Spike Stream",
        "doi": "10.1109/TCSVT.2021.3130147",
        "authors": [
            "Xijie Xiang",
            "Lin Zhu",
            "Jianing Li",
            "Yixuan Wang",
            "Tiejun Huang",
            "Yonghong Tian"
        ],
        "abstract": "Spike camera is a new type of bio-inspired vision sensor, each pixel of which perceives the brightness of the scene independently, and finally outputs 3-dimensional spatiotemporal spike streams. To bridge the spike camera and traditional frame-based vision, there is some works to reconstruct spike streams into regular images. However, the low spatial resolution ( 400\u00d7250 ) of the spike camera limits the quality of the reconstructed images. Thus, it is meaningful to explore a super-resolution reconstruction for spike streams. In this paper, we propose an end-to-end network to reconstruct high-resolution images from low-resolution spike streams. To utilize more spatiotemporal features of spike streams, our network adopts a multi-level features learning mechanism, including intra-stream feature extraction by spike encoder, inter-stream dependencies extraction based on optical flow module, and joint features learning via spike-based iterative projection. Experimental results demonstrate that our network is superior to the combination of state-of-the-art intensity image reconstruction methods and super-resolution networks on simulated and real datasets.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 17,
            "updated": "2025-06-12T13:44:32.389673"
        },
        {
            "source": "scholar",
            "count": 39,
            "updated": "2025-06-12T13:44:32.217480"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "http://www.jdl.link/doc/2011/20231127_Learning_Super-Resolution_Reconstruction_for_High_Temporal_Resolution_Spike_Stream.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9625006"
        },
        {
            "type": "project_page",
            "url": "https://www.pkuml.org/resources/pku-spike-recon-dataset.html"
        }
    ],
    "full_name": "",
    "bibtex": {
        "pages": "16--29",
        "year": 2023,
        "month": "jan",
        "author": "Xiang, Xijie and Zhu, Lin and Li, Jianing and Wang, Yixuan and Huang, Tiejun and Tian, Yonghong",
        "journal": "IEEE Transactions on Circuits and Systems for Video Technology",
        "urldate": "2024-12-01",
        "number": "1",
        "language": "en",
        "doi": "10.1109/TCSVT.2021.3130147",
        "url": "https://ieeexplore.ieee.org/document/9625006/",
        "issn": "1051-8215, 1558-2205",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "33",
        "title": "Learning {Super}-{Resolution} {Reconstruction} for {High} {Temporal} {Resolution} {Spike} {Stream}",
        "type": "article",
        "key": "xiang_learning_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/DCC.2017.69",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00242",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00248",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS45731.2020.9181055",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2948110",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2020.3034649",
            "source": "crossref"
        },
        {
            "doi": "10.1109/VCIP49819.2020.9301840",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2017.2759783",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2017.8050546",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.2982166",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASSP.1981.1163711",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2008.4587647",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2439281",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2018.2866399",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2018.2890271",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2019.2917511",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISBI.2009.5193030",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICTSD.2015.7095900",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.613",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.2967596",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2018.2820807",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00693",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neucom.2018.12.048",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00284",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00834",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00768",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46475-6_25",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.90",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.19",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-11021-5_5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2017.151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00399",
            "source": "crossref"
        },
        {
            "doi": "10.1017/CBO9781107447615",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2020.3032014",
            "source": "crossref"
        },
        {
            "doi": "10.1016/1049-9652(91)90045-L",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00402",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-01144-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACSSC.2003.1292216",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.image.2015.10.005",
            "source": "crossref"
        },
        {
            "title": "Wide activation for efficient and accurate image super-resolution",
            "source": "crossref"
        }
    ]
}
---



### Dataset Structure