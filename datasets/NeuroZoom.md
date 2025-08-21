---
{
    "name": "NeuroZoom",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Super-resolution",
        "Monitor Conversion",
        "De-noising",
        "Upscaling Resolution"
    ],
    "description": "De-noising and Super-resolution",
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
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://sites.google.com/view/EventZoom",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 4.96,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "NeuroZoom: Denoising and Super Resolving Neuromorphic Events and Spikes",
        "doi": "10.1109/TPAMI.2023.3304486",
        "authors": [
            "Peiqi Duan",
            "Yi Ma",
            "Xinyu Zhou",
            "Xinyu Shi",
            "Zihao W. Wang",
            "Tiejun Huang",
            "Boxin Shi"
        ],
        "abstract": "Neuromorphic cameras are emerging imaging technology that has advantages over conventional imaging sensors in several aspects including dynamic range, sensing latency, and power consumption. However, the signal-to-noise level and the spatial resolution still fall behind the state of conventional imaging sensors. In this article, we address the denoising and super-resolution problem for modern neuromorphic cameras. We employ 3D U-Net as the backbone neural architecture for such a task. The networks are trained and tested on two types of neuromorphic cameras: a dynamic vision sensor and a spike camera. Their pixels generate signals asynchronously, the former is based on perceived light changes and the latter is based on accumulated light intensity. To collect the datasets for training such networks, we design a display-camera system to record high frame-rate videos at multiple resolutions, providing supervision for denoising and super-resolution. The networks are trained in a noise-to-noise fashion, where the two ends of the network are unfiltered noisy data. The output of the networks has been tested for downstream applications including event-based visual object tracking and image reconstruction. Experimental results demonstrate the effectiveness of improving the quality of neuromorphic events and spikes, and the corresponding improvement to downstream applications with state-of-the-art performance.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 11,
            "updated": "2025-07-12T07:58:18.794243"
        },
        {
            "source": "scholar",
            "count": 16,
            "updated": "2025-07-12T07:58:18.355646"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2021/papers/Duan_EventZoom_Learning_To_Denoise_and_Super_Resolve_Neuromorphic_Events_CVPR_2021_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/abstract/document/10217052"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/EventZoom"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "15219--15232",
        "year": 2023,
        "month": "dec",
        "author": "Duan, Peiqi and Ma, Yi and Zhou, Xinyu and Shi, Xinyu and Wang, Zihao W. and Huang, Tiejun and Shi, Boxin",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-12-21",
        "number": "12",
        "language": "en",
        "doi": "10.1109/TPAMI.2023.3304486",
        "url": "https://ieeexplore.ieee.org/document/10217052/",
        "shorttitle": "{NeuroZoom}",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "volume": "45",
        "title": "{NeuroZoom}: {Denoising} and {Super} {Resolving} {Neuromorphic} {Events} and {Spikes}",
        "type": "article",
        "key": "duan_neurozoom_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR52688.2022.01725",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00573",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_25",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00629",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCVW.2019.00532",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00161",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DCC.2019.00080",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3130049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00401",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58565-5_9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2903179",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00284",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00834",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s43588-021-00184-y",
            "source": "crossref"
        },
        {
            "doi": "10.1109/DCC.2017.69",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58574-7_4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00253",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00240",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00388",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.eng.2022.01.012",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00638",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01712",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00860",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0734-189X(89)90051-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2012.2227726",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s18124122",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00151",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00177",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2019.2922850",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2011.2109730",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICME.2019.00248",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7168735",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01182",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.618",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2018.2865304",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00398",
            "source": "crossref"
        },
        {
            "title": "Need for speed: A benchmark for higher frame rate object tracking",
            "source": "crossref"
        },
        {
            "title": "Transitional learning: Exploring the transition states of degradation for blind super-resolution",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Video to events: Bringing modern computer vision closer to event cameras",
            "source": "crossref"
        },
        {
            "title": "Phased LSTM: Accelerating recurrent network training for long or event-based sequences",
            "source": "crossref"
        },
        {
            "title": "Learning to detect objects with a 1 megapixel event camera",
            "source": "crossref"
        },
        {
            "title": "3D U-net: Learning dense volumetric segmentation from sparse annotation",
            "source": "crossref"
        },
        {
            "title": "Noise2Noise: Learning image restoration without clean data",
            "source": "crossref"
        },
        {
            "title": "Guided event filtering: Synergy between intensity images and neuromorphic events for high performance imaging",
            "source": "crossref"
        },
        {
            "title": "O (n)-space spatiotemporal filter for reducing noise in neuromorphic vision sensors",
            "source": "crossref"
        },
        {
            "title": "VisEvent: Reliable object tracking via collaboration of frame and event flows",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Are high-resolution event cameras really needed?",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

| Filename     | Size     | Resolution | Download Link                                                                                |
| ------------ | -------- | ---------- | -------------------------------------------------------------------------------------------- |
| ev_hr.zip    | 3.4 Gb   | 222×124    | [Download](https://drive.google.com/uc?id=1qZFxbiVkXU53eqOSJpXEGUu4fOKlMOeY&export=download) |
| ev_lr_1.zip  | 0.683 Gb | 111×62     | [Download](https://drive.google.com/uc?id=1KAljffJiwHAyfvlWJsZgGhGQrSS8GPdo&export=download) |
| ev_lr_2.zip  | 0.644 Gb | 111×62     | [Download](https://drive.google.com/uc?id=1GVBwbz_wOL20Iu7FvfYdxBNiwV_hDwLq&export=download) |
| ev_llr_1.zip | 0.166 Gb | 56×31      | [Download](https://drive.google.com/uc?id=1OUXb9KCOGTXHXjSkdPz-UZ-Bc7CWwufG&export=download) |
| ev_llr_2.zip | 0.166 Gb | 56×31      | [Download](https://drive.google.com/uc?id=1aCeaOpquWfSbSV_GfAcIEA0XGm7CsgSb&export=download) |

- "ev_hr.zip": event data with resolution of 222 x 124
- "ev_lr_1.zip" and "ev_lr_2.zip": event data with resolution of 111 x62
- "ev_llr_1.zip" and "ev_llr_2.zip":event data with resolution of 56 x 31
- The index number of each file is corresponding to the sequence of the [Need-for-Speed (NFS) dataset](http://ci2cv.net/nfs/index.html) [14].
