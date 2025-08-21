---
{
    "name": "EvDownsampling",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "DVXplorer"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "tags": [
        "Downsampling"
    ],
    "description": "Validation dataset for downsampling techniques",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Figshare"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Figshare",
                "url": "https://sussex.figshare.com/articles/dataset/EvDownsampling_dataset/26528146",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 0.143,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EvDownsampling: A Robust Method For Downsampling Event Camera Data",
        "doi": "10.1007/978-3-031-92460-6_22",
        "authors": [
            "Anindya Ghosh",
            "Thomas Nowotny",
            "James Knight"
        ],
        "abstract": "Event cameras are bio-inspired vision sensors that are wellsuited for use on autonomous systems. Compared to conventional cameras, event cameras provide a higher dynamic range and temporal resolution as well as lower bandwidth and power requirements. Furthermore, when the events from such cameras are processed by spiking neural networks (SNNs) running on neuromorphic chips, very energy-efficient systems can be implemented. However, the spatial resolutions offered by modern event-based cameras is much higher than most neuromorphic hardware can process and thus, it is often necessary to downsample the event stream. While downsampling is regularly used in standard computer vision, event-based downsampling algorithms are lacking. This hampers the development of event-based computer vision systems. Here, we present a bio-inspired spatio-temporal downsampling technique that can downsample event streams by factors of up to 16 times. To evaluate our downsampling method, we compare downsampled event streams from a high-resolution event camera to those produced natively by a low-resolution event camera. Finally, we show that compared to other event-based downsampling techniques, we can achieve improved accuracy with considerably lower numbers of spikes when classifying highly downsampled versions of the DVSGesture dataset. The code is available at: https://github.com/anindyaghosh/EvDownsampling and the event streams can be downloaded from: https://doi.org/10.25377/sussex. 26528146.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-07-12T09:22:10.131980"
        },
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-07-12T09:22:10.451509"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://sussex.figshare.com/articles/conference_contribution/EvDownsampling_a_robust_method_for_downsampling_event_camera_data/26970640/1?file=49086259"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-92460-6_22"
        },
        {
            "type": "github_page",
            "url": "https://github.com/agirbau/EvDownsamplingNavi"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_classes": "4",
        "stereo": false
    },
    "bibtex": {
        "isbn": "978-3-031-92460-6",
        "pages": "377--390",
        "address": "Cham",
        "publisher": "Springer Nature Switzerland",
        "year": 2025,
        "booktitle": "Computer Vision -- ECCV 2024 Workshops",
        "title": "EvDownsampling: A Robust Method for Downsampling Event Camera Data",
        "editor": "Del Bue, Alessioand Canton, Cristianand Pont-Tuset, Jordiand Tommasi, Tatiana",
        "author": "Ghosh, Anindyaand Nowotny, Thomasand Knight, James",
        "type": "inproceedings",
        "key": "10.1007/978-3-031-92460-6_22"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2017.2785272",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MM.2018.112130359",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2013.00223",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2010.5537149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3589737.3605994",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759345",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3584954.3585001",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3065386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2014.2308551",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ITSC.2006.1706816",
            "source": "crossref"
        },
        {
            "doi": "10.1023/A:1008916026143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298965",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TED.2017.2717848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2015.2392947",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3584954.3584962",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093366",
            "source": "crossref"
        },
        {
            "doi": "10.1016/S0925-2312(02)00838-X",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00186",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS45731.2020.9180436",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2008.930649",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

This dataset contains event streams of highly dynamic real-world scenes collected using two DVS cameras of different spatial resolutions – a DVXplorer (640×480 px) and a Davis346 (346×260 px). Both cameras simultaneously recorded each scene with negligible parallax error. The dataset is provided to test event-based spatio-temporal downsampling techniques through comparing downsampled higher-resolution recordings with matching lower-resolution recordings, as explained in our publication above.

There are 4 classes {class_folder} of scenes:

- Traffic: natural lighting. Bus and car moving across camera visual field with several pedestrians. 6 seconds long.
- HandGestures: fluorescent lighting. Person either waving their hand, waving their arms or doing jumping jacks. 12-15 seconds long.
- Corridor: fluorescent lighting. Moving through corridors. One corridor scene (Pevensey) has a carpet which provides texture, while the other scene (Arundel) does not have a carpet. 18-24 seconds long.
- Cars: natural lighting. Car moving across camera visual field with few pedestrians. 3-5 seconds long.

Each dataset/{class_folder} contains two folders consisting of:

1. Videos of the scene recordings captured by both DVS cameras placed side-by-side (.mp4)
2. Raw event data information in the form of (x, y, timestamp, polarity) in AEDAT 4 format (.aedat4).

The script dualCam_dvRead.py can be used to convert the .aedat4 files into a NumPy format and to generate _frame_ reconstructions. The syntax to call the script from the command-line is:

python3 dualCam_dvRead.py --data_folder {class_folder} --input {scene_recording} --publisher_rate {publisher_rate}

- class_folder is the class of the scene recording e.g. corridor
- scene_recording is the specific recording in that class e.g. Pevensey
- publisher_rate determines frame rate of images published (in fps) e.g. 1000.
