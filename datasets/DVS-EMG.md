---
{
    "name": "DVS-EMG",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DVS128",
        "DAVIS240"
    ],
    "other_sensors": [
        "Myo EMG armband"
    ],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Gesture Recognition",
        "Hand Pose Detection"
    ],
    "task": "Hand Gesture Recognition",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Zenodo"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "The dataset does not contain the raw data (aedat files). These are available on request from the authors",
        "dataset_links": [
            {
                "name": "Zenodo",
                "url": "https://zenodo.org/records/3663616",
                "format": "Numpy",
                "available": true,
                "doi": "10.5281/zenodo.3228845"
            }
        ],
        "size_gb": 31.9,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Hand-Gesture Recognition Based on EMG and Event-Based Camera Sensor Fusion: A Benchmark in Neuromorphic Computing",
        "doi": "10.3389/fnins.2020.00637",
        "authors": [
            "Enea Ceolini",
            "Charlotte Frenkel",
            "Sumit Bam Shrestha",
            "Gemma Taverni",
            "Lyes Khacef",
            "Melika Payvand",
            "Elisa Donati"
        ],
        "abstract": "Hand gestures are a form of non-verbal communication used by individuals in conjunction with speech to communicate. Nowadays, with the increasing use of technology, hand-gesture recognition is considered to be an important aspect of Human-Machine Interaction (HMI), allowing the machine to capture and interpret the user's intent and to respond accordingly. The ability to discriminate between human gestures can help in several applications, such as assisted living, healthcare, neuro-rehabilitation, and sports. Recently, multi-sensor data fusion mechanisms have been investigated to improve discrimination accuracy. In this paper, we present a sensor fusion framework that integrates complementary systems: the electromyography (EMG) signal from muscles and visual information. This multi-sensor approach, while improving accuracy and robustness, introduces the disadvantage of high computational cost, which grows exponentially with the number of sensors and the number of measurements. Furthermore, this huge amount of data to process can affect the classification latency which can be crucial in real-case scenarios, such as prosthetic control. Neuromorphic technologies can be deployed to overcome these limitations since they allow real-time processing in parallel at low power consumption. In this paper, we present a fully neuromorphic sensor fusion approach for hand-gesture recognition comprised of an event-based vision sensor and three different neuromorphic processors. In particular, we used the event-based camera, called DVS, and two neuromorphic platforms, Loihi and ODIN + MorphIC. The EMG signals were recorded using traditional electrodes and then converted into spikes to be fed into the chips. We collected a dataset of five gestures from sign language where visual and electromyography signals are synchronized. We compared a fully neuromorphic approach to a baseline implemented using traditional machine learning approaches on a portable GPU system. According to the chip's constraints, we designed specific spiking neural networks (SNNs) for sensor fusion that showed classification accuracy comparable to the software baseline. These neuromorphic alternatives have increased inference time, between 20 and 40%, with respect to the GPU system but have a significantly smaller energy-delay product (EDP) which makes them between 30\u00d7 and 600\u00d7 more efficient. The proposed work represents a new benchmark that moves neuromorphic computing toward a real-world scenario.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 131,
            "updated": "2025-06-02T14:52:11.566320"
        },
        {
            "source": "scholar",
            "count": 197,
            "updated": "2025-06-02T14:52:10.722075"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1910.11126"
        },
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2020.00637/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/Enny1991/dvs_emg_fusion"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "150",
        "num_subjects": "10",
        "num_sessions": "3",
        "num_classes": "5",
        "stereo": false
    },
    "bibtex": {
        "pages": "637",
        "year": 2020,
        "month": "aug",
        "author": "Ceolini, Enea and Frenkel, Charlotte and Shrestha, Sumit Bam and Taverni, Gemma and Khacef, Lyes and Payvand, Melika and Donati, Elisa",
        "journal": "Frontiers in Neuroscience",
        "urldate": "2024-10-27",
        "language": "en",
        "doi": "10.3389/fnins.2020.00637",
        "url": "https://www.frontiersin.org/article/10.3389/fnins.2020.00637/full",
        "shorttitle": "Hand-{Gesture} {Recognition} {Based} on {EMG} and {Event}-{Based} {Camera} {Sensor} {Fusion}",
        "issn": "1662-453X",
        "volume": "14",
        "title": "Hand-{Gesture} {Recognition} {Based} on {EMG} and {Event}-{Based} {Camera} {Sensor} {Fusion}: {A} {Benchmark} in {Neuromorphic} {Computing}",
        "type": "article",
        "key": "Ceolini2020"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00023",
            "source": "crossref"
        },
        {
            "doi": "10.1038/sdata.2014.53",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ASRU.2015.7404837",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2015.2476555",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2313565",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s18092850",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco.2007.19.11.2881",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2019.8852396",
            "source": "crossref"
        },
        {
            "doi": "10.1155/2013/704504",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2006.887979",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.bspc.2019.101637",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s13042-017-0705-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IJCNN.2019.8852089",
            "source": "crossref"
        },
        {
            "doi": "10.5772/59974",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2015.2479256",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s42256-019-0097-1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MM.2018.112130359",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSTARS.2014.2305441",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2019.2925454",
            "source": "crossref"
        },
        {
            "doi": "10.1186/1743-0003-7-42",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.robot.2014.11.005",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2018.2880425",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2019.2928793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2304638",
            "source": "crossref"
        },
        {
            "doi": "10.1103/PhysRevE.51.738",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1741-2552/aa6802",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BIOROB.2018.8487923",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.procs.2017.09.092",
            "source": "crossref"
        },
        {
            "doi": "10.1148/radiol.11091822",
            "source": "crossref"
        },
        {
            "doi": "10.1002/hbm.10057",
            "source": "crossref"
        },
        {
            "doi": "10.5555/3122009.3242044",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNN.2004.832719",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2012.2203480",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2015.2460697",
            "source": "crossref"
        },
        {
            "doi": "10.4015/S1016237205000287",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISSCC.2006.1696265",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.ergon.2017.02.004",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1741-2560/11/4/046001",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1741-2560/12/6/066022",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IEDM.2015.7409627",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.1254642",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACSSC.2017.8335699",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2017.2759700",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2018.2881432",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBME.2016.2604856",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s18051615",
            "source": "crossref"
        },
        {
            "doi": "10.1109/HUMANOIDS.2012.6651535",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00141",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2013.2296173",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2017.00682",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2010.2057231",
            "source": "crossref"
        },
        {
            "doi": "10.1162/1064546053278973",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNSRE.2010.2100828",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2019.08.020",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00891",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patrec.2013.07.003",
            "source": "crossref"
        },
        {
            "doi": "10.7717/peerj-cs.218",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-25332-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.1162/neco_a_01086",
            "source": "crossref"
        },
        {
            "title": "\u201cA low power, fully event-based gesture recognition system,\u201d",
            "source": "crossref"
        },
        {
            "title": "Feature representations for neuromorphic audio spike streams",
            "source": "crossref"
        },
        {
            "title": "Electromyography data for non-invasive naturally-controlled robotic hand prostheses",
            "source": "crossref"
        },
        {
            "title": "\u201cThe third \u2018chime\u2019 speech separation and recognition challenge: dataset, task and baselines,\u201d",
            "source": "crossref"
        },
        {
            "title": "A versatile embedded platform for emg acquisition and gesture recognition",
            "source": "crossref"
        },
        {
            "title": "Neurogrid: a mixed-analog-digital multichip system for large-scale neural simulations",
            "source": "crossref"
        },
        {
            "title": "Classifier level fusion of accelerometer and semg signals for automatic fitness activity diarization",
            "source": "crossref"
        },
        {
            "title": "Learning real-world stimuli in a neural network with spike-driven synaptic dynamics",
            "source": "crossref"
        },
        {
            "title": "\u201cAttention-driven multi-sensor selection,\u201d",
            "source": "crossref"
        },
        {
            "title": "A review of data fusion techniques",
            "source": "crossref"
        },
        {
            "title": "\u201cLive demostration: sensor fusion using emg and vision for hand gesture classification in mobile applications,\u201d",
            "source": "crossref"
        },
        {
            "title": "Sensor fusion using EMG and vision for hand gesture classification in mobile applications",
            "source": "crossref"
        },
        {
            "title": "Aer ear: A matched silicon cochlea pair with address event representation interface",
            "source": "crossref"
        },
        {
            "title": "Hand gesture recognition based on motor unit spike trains decoded from high-density electromyography",
            "source": "crossref"
        },
        {
            "title": "A review of hand gesture and sign language recognition techniques",
            "source": "crossref"
        },
        {
            "title": "\u201cBidirectional associative memory for multimodal fusion: a depression evaluation case study,\u201d",
            "source": "crossref"
        },
        {
            "title": "A kinect-based gesture recognition approach for a natural human robot interface",
            "source": "crossref"
        },
        {
            "title": "A neuromorphic event-based neural recording system for smart brain-machine-interfaces",
            "source": "crossref"
        },
        {
            "title": "\u201cBinaryconnect: training deep neural networks with binary weights during propagations,\u201d",
            "source": "crossref"
        },
        {
            "title": "Benchmarks for progress in neuromorphic computing",
            "source": "crossref"
        },
        {
            "title": "Loihi: a neuromorphic manycore processor with on-chip learning",
            "source": "crossref"
        },
        {
            "title": "Hyperspectral and LiDAR data fusion: outcome of the 2013 grss data fusion contest",
            "source": "crossref"
        },
        {
            "title": "\u201cA pulse-coded communications infrastructure for neuromorphic systems,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cImagenet: a large-scale hierarchical image database,\u201d",
            "source": "crossref"
        },
        {
            "title": "Processing EMG signals using reservoir computing on an event-based neuromorphic system. in 2018 IEEE Biomedical Circuits and Systems Conference (BioCAS)",
            "source": "crossref"
        },
        {
            "title": "Discrimination of EMG signals using a neuromorphic implementation of a spiking neural network",
            "source": "crossref"
        },
        {
            "title": "Cognitive vision system for control of dexterous prosthetic hands: experimental evaluation",
            "source": "crossref"
        },
        {
            "title": "Deep unsupervised network for multimodal perception, representation and classification",
            "source": "crossref"
        },
        {
            "title": "A 0.086-mm2 12.7-pj/sop 64k-synapse 256-neuron online-learning digital spiking neuromorphic processor in 28-nm CMOS",
            "source": "crossref"
        },
        {
            "title": "Morphic: a 65-nm 738k-synapse/mm2 quad-core binary-weight digital neuromorphic processor with stochastic spike-driven online learning",
            "source": "crossref"
        },
        {
            "title": "The spinnaker project",
            "source": "crossref"
        },
        {
            "title": "Time structure of the activity in neural network models",
            "source": "crossref"
        },
        {
            "title": "Deep learning-based artificial vision for grasp classification in myoelectric hands",
            "source": "crossref"
        },
        {
            "title": "\u201cVisual cues to improve myoelectric control of upper limb prostheses,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cActivity recognition exploiting classifier level fusion of acceleration and physiological signals,\u201d",
            "source": "crossref"
        },
        {
            "title": "Hand gesture recognition for human computer interaction",
            "source": "crossref"
        },
        {
            "title": "Prostate cancer: multiparametric MR imaging for detection, localization, and staging",
            "source": "crossref"
        },
        {
            "title": "How can EEG/MEG and fMRI/PET data be combined?",
            "source": "crossref"
        },
        {
            "title": "\u201cBinarized neural networks,\u201d",
            "source": "crossref"
        },
        {
            "title": "Quantized neural networks: training neural networks with low precision weights and activations",
            "source": "crossref"
        },
        {
            "title": "Which model to use for cortical spiking neurons?",
            "source": "crossref"
        },
        {
            "title": "Myoelectric control of artificial limbs\u2014is there a need to change focus?",
            "source": "crossref"
        },
        {
            "title": "Multimodal data fusion: an overview of methods, challenges, and prospects",
            "source": "crossref"
        },
        {
            "title": "Designing low power of sigma delta modulator for biomedical application",
            "source": "crossref"
        },
        {
            "title": "\u201cA 128 \u00d7 128 120 dB 30 MW asynchronous vision sensor that responds to relative intensity change,\u201d",
            "source": "crossref"
        },
        {
            "title": "Gesture recognition for human-robot collaboration: a review",
            "source": "crossref"
        },
        {
            "title": "\u201cEvaluating the electromyographical signal during symmetrical load lifting,\u201d",
            "source": "crossref"
        },
        {
            "title": "Stereovision and augmented reality for closed-loop control of grasping in hand prostheses",
            "source": "crossref"
        },
        {
            "title": "Sensor fusion and computer vision for context-aware control of a multi degree-of-freedom prosthesis",
            "source": "crossref"
        },
        {
            "title": "\u201cA mixed-signal universal neuromorphic computing system,\u201d",
            "source": "crossref"
        },
        {
            "title": "A million spiking-neuron integrated circuit with a scalable communication network and interface",
            "source": "crossref"
        },
        {
            "title": "\u201cMinimum energy quantized neural networks,\u201d",
            "source": "crossref"
        },
        {
            "title": "A scalable multicore architecture with heterogeneous memory structures for dynamic neuromorphic asynchronous processors (DYNAPs)",
            "source": "crossref"
        },
        {
            "title": "Braindrop: a mixed-signal neuromorphic architecture with a dynamical systems-based programming model",
            "source": "crossref"
        },
        {
            "title": "Surrogate gradient learning in spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Converting static image datasets to spiking neuromorphic datasets using saccades",
            "source": "crossref"
        },
        {
            "title": "\u201cAutomatic differentiation in PyTorch,\u201d",
            "source": "crossref"
        },
        {
            "title": "Hierarchical complex activity representation and recognition using topic model and classifier level fusion",
            "source": "crossref"
        },
        {
            "title": "Feature extraction and selection for myoelectric control based on wearable EMG sensors",
            "source": "crossref"
        },
        {
            "title": "\u201cGain-field modulation mechanism in multimodal networks for spatial perception,\u201d",
            "source": "crossref"
        },
        {
            "title": "A reconfigurable on-line learning spiking neuromorphic processor comprising 256 neurons and 128k synapses",
            "source": "crossref"
        },
        {
            "title": "Audiovisual speech source separation: an overview of key methodologies",
            "source": "crossref"
        },
        {
            "title": "Conversion of continuous-valued deep networks to efficient event-driven networks for image classification",
            "source": "crossref"
        },
        {
            "title": "Audiovisual information fusion in human\u2013computer interfaces and intelligent environments: a survey",
            "source": "crossref"
        },
        {
            "title": "\u201cSLAYER: spike layer error reassignment in time,\u201d",
            "source": "crossref"
        },
        {
            "title": "The development of embodied cognition: six lessons from babies",
            "source": "crossref"
        },
        {
            "title": "Determining the optimal window length for pattern recognition-based myoelectric control: balancing the competing effects of classification error and controller delay",
            "source": "crossref"
        },
        {
            "title": "Self-organizing neural networks for universal learning and multimodal memory encoding",
            "source": "crossref"
        },
        {
            "title": "Large-scale neuromorphic spiking array processors: a quest to mimic the brain",
            "source": "crossref"
        },
        {
            "title": "Multimodal interaction: a review",
            "source": "crossref"
        },
        {
            "title": "A systematic review on hand gesture recognition techniques, challenges and applications",
            "source": "crossref"
        },
        {
            "title": "\u201cA self-organizing network with varying density structure for characterizing sensorimotor transformations in robotic systems,\u201d",
            "source": "crossref"
        },
        {
            "title": "SuperSpike: supervised learning in multilayer spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "\u201cDeep fusion: an attention guided factorized bilinear pooling for audio-video emotion recognition,\u201d",
            "source": "crossref"
        },
        {
            "title": "\u201cDynamic fusion of convolutional features based on spatial and temporal attention for visual tracking,\u201d",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset contains both a total of 150 EMG and DVS recordings

- 10 subjects
- 3 sessions for each subject
- 5 gestures in each session ('pinky', 'elle', 'yo', 'index', 'thumb')

Data formats:

- EMG: `Numpy`
- ANN: `Numpy`
- DVS: `aedat` and `Numpy`
- DAVIS: `Matlab` and `Numpy (compressed)`

DVS
DVS recordings only contain DVS events

- .aedat (raw data): can be imported in Matlab using (https://github.com/inivation/AedatTools/tree/master/Matlab) or in Python with function aedat2numpy in converter.py (https://github.com/Enny1991/hand_gestures_cc19/tree/master/jAER_utils)
- .npy (exported data): numpy.ndarray (xpos, ypos, ts, pol), 2D numpy array containing data of all events, timestamps ts reset to the trigger event (synchronized with the myo), timestamps ts in seconds

DAVIS
DAVIS recordings contain DVS events and APS frames.

- .mat (exported data): mat structure, name 'aedat', events are inside aedat.data.polarity (aedat.data.polarity.x,aedat.data.polarity.y,aedat.data.polarity.timeStamp,aedat.data.polarity.polarity), aps frames are inside aedat.data.frame.samples, timestamps are in aedat.data.frame.timeStampStart (start of frame collection) or aedat.data.frame.timeStampEnd (end of frame collection)
- .npz (exported data): npz files: ['frames_time', 'dvs_events', 'frames'], 'dvs_events' is a numpy.ndarray (xpos, ypos, ts, pol), 2D numpy array containing data of all events, timestamps ts reset to the trigger event (synchronized with the myo), timestamps ts in seconds; 'frames' and 'frames_time' are aps data, 'frames' is a list of all the frames, reset at the triggered time, 'frames_time' is the time for each frame, we considered the start timeStamps for each frame.

## Dataset Files

| **File**                      | **MD5**                              | **Size** |
| ----------------------------- | ------------------------------------ | -------- |
| subject01_session01_ann.npy   | md5:ce55feb9a272c7bc25f1610e69f9a11b | 505.9 kB |
| subject01_session01_davis.mat | md5:f9ef6dfefee7786a98c859c8913d80f1 | 149.3 MB |
| subject01_session01_davis.npz | md5:e139c2fe1669980584531252ca61e3ad | 764.6 MB |
| subject01_session01_dvs.aedat | md5:aeea75c1f331e3dcf49b4650952b0543 | 18.5 MB  |
| subject01_session01_dvs.npy   | md5:e698a721d8908e1075574cc4ec5babc3 | 73.2 MB  |
| subject01_session01_emg.npy   | md5:c68e6285294d2a090d886c7635a2af3f | 809.4 kB |
| subject01_session02_ann.npy   | md5:94191aaff997569754bc7facf3b76d64 | 501.9 kB |
| subject01_session02_davis.mat | md5:cfb7909b8d2d3397ec9c10689e637ee1 | 144.6 MB |
| subject01_session02_davis.npz | md5:96ea068ea42c5710222d5a9047165eba | 690.5 MB |
| subject01_session02_dvs.aedat | md5:b3b3add4d95c6f4ae1be48c7c83d7964 | 20.1 MB  |
| subject01_session02_dvs.npy   | md5:cdac34843552d75032a48c17e6474ca8 | 75.0 MB  |
| subject01_session02_emg.npy   | md5:6638b7a9463b3badcc5985007181a170 | 803.0 kB |
| subject01_session03_ann.npy   | md5:fd779e1b379ae40c893241ef6ebe1855 | 505.0 kB |
| subject01_session03_davis.mat | md5:d1eb754da9bb4a9b9c9b2dc1e17eb90e | 149.4 MB |
| subject01_session03_davis.npz | md5:da35b06b44f2d8a00bbec913e50df8e5 | 722.1 MB |
| subject01_session03_dvs.aedat | md5:1e2c9417b2cd5eafb7eaf446cb7b4d4b | 22.9 MB  |
| subject01_session03_dvs.npy   | md5:a1f0e60736ed3a9f28313a42ce873e3d | 85.5 MB  |
| subject01_session03_emg.npy   | md5:9163ca52b7f2454f4c72b0113128a021 | 807.9 kB |
| subject02_session01_ann.npy   | md5:a4a947fd27937ca4d864098ea7164ca0 | 501.7 kB |
| subject02_session01_davis.mat | md5:9192b250eb3e50fa34ae77df3115ebd4 | 145.4 MB |
| subject02_session01_davis.npz | md5:c33815c55f757a792c28a325c559c890 | 738.1 MB |
| subject02_session01_dvs.aedat | md5:5fa7e3c6c9df7dcd87c2a25e22d8a6ae | 26.0 MB  |
| subject02_session01_dvs.npy   | md5:4e0ab9a94c1adf8f9ccffe8b33985fa1 | 101.7 MB |
| subject02_session01_emg.npy   | md5:5bb614dd01c0b944001ecb8cfdbd5589 | 802.6 kB |
| subject02_session02_ann.npy   | md5:37c692e8d3273c654d14ce6cfae91d9a | 506.7 kB |
| subject02_session02_davis.mat | md5:867b6ec505205db83124a1c401af0936 | 142.1 MB |
| subject02_session02_davis.npz | md5:38063e415d7b9d223985e2eb7dc0abe0 | 699.2 MB |
| subject02_session02_dvs.aedat | md5:cfdb29012dc3370b6f8d2f64b4967f50 | 27.4 MB  |
| subject02_session02_dvs.npy   | md5:1304fd430286b49b8972eda34b1e9c9f | 107.5 MB |
| subject02_session02_emg.npy   | md5:3e315c89e7c4364bcedd01ad9d8da911 | 810.7 kB |
| subject02_session03_ann.npy   | md5:5f9ef4a521b08306420a64a724d85cec | 506.5 kB |
| subject02_session03_davis.mat | md5:d4d1aed690e6caa5479793652a7e570e | 303.3 MB |
| subject02_session03_davis.npz | md5:9df72a1db0bbe105993a963eae331594 | 3.2 GB   |
| subject02_session03_dvs.aedat | md5:837774fb09d02db0a9bd8d651f375e60 | 33.8 MB  |
| subject02_session03_dvs.npy   | md5:8fac5174686a39ea154e715469e2b2b7 | 134.3 MB |
| subject02_session03_emg.npy   | md5:874a5938158bf1aa18a913c1ec0af8cc | 810.3 kB |
| subject03_session01_ann.npy   | md5:c33e9a5174058d7d1d31828c6eb036e6 | 506.4 kB |
| subject03_session01_davis.mat | md5:d6cd2bcc2cf6e811299df9edd2edc262 | 135.4 MB |
| subject03_session01_davis.npz | md5:45f59a079c194b86b7a4b577237b9d34 | 820.2 MB |
| subject03_session01_dvs.aedat | md5:f7cbfc25de248dda3868d0882cd7dd50 | 21.2 MB  |
| subject03_session01_dvs.npy   | md5:28146b90c21b95547a4e2d3e913dcc97 | 72.4 MB  |
| subject03_session01_emg.npy   | md5:cc15ca6b55df183d212c71f600e3788b | 810.2 kB |
| subject03_session02_ann.npy   | md5:31dda77b977578cc42cd70d1d2d7a76c | 506.2 kB |
| subject03_session02_davis.mat | md5:c15739d8810bd1d5d0be866d5cef291c | 136.7 MB |
| subject03_session02_davis.npz | md5:95dbf2deb4d92e22222ae5d36132ef80 | 820.1 MB |
| subject03_session02_dvs.aedat | md5:323f1356f24854f8314ebe07591614b7 | 16.2 MB  |
| subject03_session02_dvs.npy   | md5:b98a0ae866e1d7ec8953fbc07e8e3988 | 61.5 MB  |
| subject03_session02_emg.npy   | md5:03ebd6341830745db898d6f94aeb176a | 809.9 kB |
| subject03_session03_ann.npy   | md5:ebc1d638b65f5ab61ea67781ce668bf2 | 506.7 kB |
| subject03_session03_davis.mat | md5:f43e4caf554e2a9ba1bf3662ec8cea17 | 129.6 MB |
| subject03_session03_davis.npz | md5:5e6d832b61b36a82ef267737f073f59c | 765.6 MB |
| subject03_session03_dvs.aedat | md5:deba10df32ae638861ad72747105268e | 13.5 MB  |
| subject03_session03_dvs.npy   | md5:fdbd2a5259e8ffec0c0bef4eda3b1f61 | 50.6 MB  |
| subject03_session03_emg.npy   | md5:59233d6019ef6621c328bcc30d0ad499 | 810.6 kB |
| subject04_session01_ann.npy   | md5:ff30ac813b34fd23cf891c62b6f5b948 | 506.4 kB |
| subject04_session01_davis.mat | md5:80fe31d63f7f516172c575b909adce9b | 135.0 MB |
| subject04_session01_davis.npz | md5:7c05cf6f4facc3750b312d0cfc1e1348 | 851.1 MB |
| subject04_session01_dvs.aedat | md5:1213a125ac2017e97141120adadecaad | 21.3 MB  |
| subject04_session01_dvs.npy   | md5:ebdbd34d1e386c7f77b93869c6ce999d | 81.9 MB  |
| subject04_session01_emg.npy   | md5:f9da89d274bbdc1b9a6c433ce0bd1bad | 810.2 kB |
| subject04_session02_ann.npy   | md5:7d80fe000ae40d87ac86255f93352a3f | 506.7 kB |
| subject04_session02_davis.mat | md5:eb7fc4f9b4c5c1f831f3d6b3a47adcf6 | 150.3 MB |
| subject04_session02_davis.npz | md5:18fb8e2a460ffa866af1205e4471a8a4 | 986.3 MB |
| subject04_session02_dvs.aedat | md5:9d82cf938ddfc810520275052e661390 | 38.3 MB  |
| subject04_session02_dvs.npy   | md5:64c8eaf84f077b3535524ca0069cb1a0 | 150.1 MB |
| subject04_session02_emg.npy   | md5:6d9d650c4f4dd4effe167629e52c043f | 810.6 kB |
| subject04_session03_ann.npy   | md5:8a8e1558bd8ca452755b006321f52766 | 505.0 kB |
| subject04_session03_davis.mat | md5:cc77b06994dfb3b96824e15df88c34a8 | 172.5 MB |
| subject04_session03_davis.npz | md5:fded3908a741cbed537de1090231c942 | 1.0 GB   |
| subject04_session03_dvs.aedat | md5:dab9fdbc549890619c9aeb7a30eb9435 | 56.9 MB  |
| subject04_session03_dvs.npy   | md5:4d386e2bc7509814e916f283f1818c7c | 222.6 MB |
| subject04_session03_emg.npy   | md5:a8ec85b8e99e83cd9900c08fb153d348 | 807.9 kB |
| subject05_session01_ann.npy   | md5:ebfc024d27838aff2367db3c1ce5bcd6 | 507.3 kB |
| subject05_session01_davis.mat | md5:d11117fc0e34cb6d61e06775aa4fd3ca | 129.2 MB |
| subject05_session01_davis.npz | md5:c1dce00b2a035a58b586ebcb5b8cafb5 | 576.2 MB |
| subject05_session01_dvs.aedat | md5:c3cdbad124c898fdfb5ac32c50c343fd | 16.0 MB  |
| subject05_session01_dvs.npy   | md5:d27594dd21cae2a2463824eabf4b5007 | 62.0 MB  |
| subject05_session01_emg.npy   | md5:bad8a6ade0bd4e3798608d0cf5bc7afb | 811.6 kB |
| subject05_session02_ann.npy   | md5:e99d910aeeea69c90a716a4cfc58e847 | 506.7 kB |
| subject05_session02_davis.mat | md5:f0d7d5907d60e2e5308e9fabca0368c0 | 131.5 MB |
| subject05_session02_davis.npz | md5:a8dfc858886c50787b96665cc0a178c6 | 610.8 MB |
| subject05_session02_dvs.aedat | md5:5bbd1fe0e1f170b4f697e5a8be4f5f2f | 16.2 MB  |
| subject05_session02_dvs.npy   | md5:bc3e0dc5f6ffedff8238abfadf4483a1 | 63.6 MB  |
| subject05_session02_emg.npy   | md5:f4be07d05b67baf07afc23dd95285a76 | 810.7 kB |
| subject05_session03_ann.npy   | md5:9db24bc5be923702a6e337846a47588d | 506.8 kB |
| subject05_session03_davis.mat | md5:5a9c58e76563ca29b2de6b55f776bdaa | 142.8 MB |
| subject05_session03_davis.npz | md5:cd16770c9b3413f1675930c1ee4ed367 | 695.7 MB |
| subject05_session03_dvs.aedat | md5:4169bd859dd7653b11d077435109243f | 27.0 MB  |
| subject05_session03_dvs.npy   | md5:915aee591f2eab1a8e0a6275bcfbad0c | 100.9 MB |
| subject05_session03_emg.npy   | md5:d09cfa01ebd3526fe46072ce5e478b00 | 810.8 kB |
| subject06_session01_ann.npy   | md5:3c8c69861745cc5fafdde1e749062fbb | 500.0 kB |
| subject06_session01_davis.mat | md5:72debd93946549334d14b8b11e44a335 | 124.8 MB |
| subject06_session01_davis.npz | md5:67eaba43d2635e3fc9d56482b2de6191 | 604.8 MB |
| subject06_session01_dvs.aedat | md5:292ef20e0c14593734a66384c43f4180 | 17.7 MB  |
| subject06_session01_dvs.npy   | md5:7ae180345e7d74db5a00e19d2887fbf2 | 67.6 MB  |
| subject06_session01_emg.npy   | md5:3dc5c8d40857d6852eb29302661d18ee | 799.9 kB |
| subject06_session02_ann.npy   | md5:031d500acae0ad79d779f4ca2e31e239 | 497.1 kB |
| subject06_session02_davis.mat | md5:973fc0a5504ac1a3691e2fc65ad5582e | 130.3 MB |
| subject06_session02_davis.npz | md5:864283a1a3dd4ce0560506e2d71e4f65 | 656.5 MB |
| subject06_session02_dvs.aedat | md5:a9e4c3d34b285b3eacefc609e15c01e3 | 18.8 MB  |
| subject06_session02_dvs.npy   | md5:277055659f8e186b515514da1c367091 | 72.0 MB  |
| subject06_session02_emg.npy   | md5:434c70c8566b8e70b49bf5d8dc8659c4 | 795.3 kB |
| subject06_session03_ann.npy   | md5:223235b465a4df4e85ce381c7a0b3e84 | 498.2 kB |
| subject06_session03_davis.mat | md5:f5854da926e13e5a55e1a382b26868c4 | 127.6 MB |
| subject06_session03_davis.npz | md5:81ab60606bcfd600413aa58fd52b81fd | 636.2 MB |
| subject06_session03_dvs.aedat | md5:bad789c1e60d79b3df0cb6003fec1853 | 18.1 MB  |
| subject06_session03_dvs.npy   | md5:bbf3436e76c1b5c08664880aa88104c4 | 70.1 MB  |
| subject06_session03_emg.npy   | md5:b6b0493d158fbb441135424e25dc443b | 797.0 kB |
| subject07_session01_ann.npy   | md5:57db87f49bbdb2d19fc2c55e8fca247e | 506.6 kB |
| subject07_session01_davis.mat | md5:49487f54de6f59b80405dbed84307798 | 130.8 MB |
| subject07_session01_davis.npz | md5:c49b84b4235d1d1d3a6cb438cdb1865c | 775.9 MB |
| subject07_session01_dvs.aedat | md5:412da87dc2cc5695543c46c3cd0b91c7 | 15.5 MB  |
| subject07_session01_dvs.npy   | md5:f2803902219b6c5de24af95756c3c8ec | 61.1 MB  |
| subject07_session01_emg.npy   | md5:ebc8b2379404b0ddd7d8f17e805d1cdd | 810.5 kB |
| subject07_session02_ann.npy   | md5:eeea336d761e2a61560783d73320fc34 | 506.2 kB |
| subject07_session02_davis.mat | md5:00c767d0726e8ef6637b076f73282a62 | 131.2 MB |
| subject07_session02_davis.npz | md5:3b8621588c1921a46bf76b64c2ebeed9 | 777.6 MB |
| subject07_session02_dvs.aedat | md5:66176fa80f14b9b43954f719708198b9 | 16.9 MB  |
| subject07_session02_dvs.npy   | md5:846ad8b752f1f968c4ebb8ee269fc7df | 64.9 MB  |
| subject07_session02_emg.npy   | md5:67320e333892b2e882f80cd26a854b9e | 809.9 kB |
| subject07_session03_ann.npy   | md5:72337ed1d6eaf33c7998f4e36d5c0ba4 | 504.9 kB |
| subject07_session03_davis.mat | md5:685de049e7de27b4a7ab9e6dcb08e064 | 125.8 MB |
| subject07_session03_davis.npz | md5:fc2bc8d4df7f30ef96b1a74bccd438b0 | 526.5 MB |
| subject07_session03_dvs.aedat | md5:e0aa2d091adc03b24b144b0909c4a6cc | 9.6 MB   |
| subject07_session03_dvs.npy   | md5:488146c81f7af6b71939c1200ea914cd | 37.5 MB  |
| subject07_session03_emg.npy   | md5:39cfdc1b6957349b48aa82dd3084a9b7 | 807.8 kB |
| subject08_session01_ann.npy   | md5:985b2ee2a399388a7091a76801d0eb2e | 506.0 kB |
| subject08_session01_davis.mat | md5:bf43bf9cbf13632ca25c9860d86d76ff | 145.2 MB |
| subject08_session01_davis.npz | md5:ae6e443b8b42aa84278a219af2018700 | 903.5 MB |
| subject08_session01_dvs.aedat | md5:4e4eef7b5bc8c5d5e32c2cd55c335dc9 | 32.0 MB  |
| subject08_session01_dvs.npy   | md5:9cb20a3d12030b0faab96084d0b7202f | 123.8 MB |
| subject08_session01_emg.npy   | md5:13522db89844f4fea4fd620cfaa989d3 | 809.5 kB |
| subject08_session02_ann.npy   | md5:eee2bd377eb9806d38511a49f6e92050 | 506.5 kB |
| subject08_session02_davis.mat | md5:6520c7c13d4c0828b11f8e149aeb10c5 | 134.6 MB |
| subject08_session02_davis.npz | md5:1d86b6ee5306cea64c049d947050d0d4 | 790.3 MB |
| subject08_session02_dvs.aedat | md5:b1d44ba4e751244e3e638fb561895607 | 19.9 MB  |
| subject08_session02_dvs.npy   | md5:427e2d5a9bfd9c411073bbc6fbef0676 | 76.1 MB  |
| subject08_session02_emg.npy   | md5:817aaee0804108c0d3bb77ab9b3f5cfe | 810.3 kB |
| subject08_session03_ann.npy   | md5:c51e07996c6f6a63f832a7a996ab0f6c | 506.7 kB |
| subject08_session03_davis.mat | md5:99528460e06ae48da2870af8222cdb7b | 130.3 MB |
| subject08_session03_davis.npz | md5:5666c2756aa0cd88b68e05f094a9de1f | 752.6 MB |
| subject08_session03_dvs.aedat | md5:639dc302ee0d3d5bab97b75886c014d6 | 15.4 MB  |
| subject08_session03_dvs.npy   | md5:b2e86983e92add8184f5f3ea38646fbc | 59.1 MB  |
| subject08_session03_emg.npy   | md5:90b87ff9aac1a9dd2b6aa4763591b7bc | 810.6 kB |
| subject09_session01_ann.npy   | md5:0ef8667ef01d9c774609c43441ed9bc7 | 502.9 kB |
| subject09_session01_davis.mat | md5:00048b8e5c35daef43f62dc9fd7ebf64 | 123.5 MB |
| subject09_session01_davis.npz | md5:279d9410541445220076b87f05b29be6 | 773.7 MB |
| subject09_session01_dvs.aedat | md5:22c6b3b9db9f23fed05c5fa7a56a9286 | 15.7 MB  |
| subject09_session01_dvs.npy   | md5:d33b67f1bad814524725ebab69cc7a7c | 60.8 MB  |
| subject09_session01_emg.npy   | md5:a75cdade19cd3032df963ebfc1b6f487 | 804.6 kB |
| subject09_session02_ann.npy   | md5:074dd072bb2c64726714e9b21c87dac7 | 469.2 kB |
| subject09_session02_davis.mat | md5:c3c2b5d6bb5fdd1e94c598a399c2fcab | 139.1 MB |
| subject09_session02_davis.npz | md5:bcc5d4ccb794f857f9152ab57a1d2b44 | 725.3 MB |
| subject09_session02_dvs.aedat | md5:52ed4aa4bb3efabdfc635fccd1f08b1b | 19.8 MB  |
| subject09_session02_dvs.npy   | md5:a986c702b71475ce35f16ea2b6164a31 | 76.7 MB  |
| subject09_session02_emg.npy   | md5:7ba520a4cc840e5768fdb5ef58123809 | 750.7 kB |
| subject09_session03_ann.npy   | md5:9f4874ed70666c163325f60f45353363 | 503.5 kB |
| subject09_session03_davis.mat | md5:8efca1dd041bb66d205515d88456b14c | 132.4 MB |
| subject09_session03_davis.npz | md5:b0108a92a6f82ed1243435828c442b0d | 800.1 MB |
| subject09_session03_dvs.aedat | md5:71013adc9bb93de7aa910df74eb86a71 | 20.3 MB  |
| subject09_session03_dvs.npy   | md5:ff9b41078afbf7f19b7091e2a7b6f108 | 78.7 MB  |
| subject09_session03_emg.npy   | md5:5e84527a71c35f4ed93b08a2577eceda | 805.5 kB |
| subject10_session01_ann.npy   | md5:25a37147ba135422490a96c67f2f3c3b | 506.9 kB |
| subject10_session01_davis.mat | md5:4ffa7eae007bd7dd77176ac9bbccf8ff | 134.2 MB |
| subject10_session01_davis.npz | md5:0557e1415cdf16b81ae63eb22e8e20cb | 602.4 MB |
| subject10_session01_dvs.aedat | md5:98a10ff19fe21701467c0cfecbc053d1 | 14.7 MB  |
| subject10_session01_dvs.npy   | md5:b79770ad0e21931fc68b0ba7f6f1500b | 55.9 MB  |
| subject10_session01_emg.npy   | md5:2ead7e33c4355e4975430ab0ac175f5e | 811.0 kB |
| subject10_session02_ann.npy   | md5:b77306f2bd5fdd6fc1a9e9cb3ed3f4ea | 506.5 kB |
| subject10_session02_davis.mat | md5:4ad4d3c2975468cb6bd5cb4a541a16d5 | 133.8 MB |
| subject10_session02_davis.npz | md5:9f01bd8c918e1dde12cfae9fe0f4da81 | 596.1 MB |
| subject10_session02_dvs.aedat | md5:e8a460aec91c8ae32d4fde9695dd9f5f | 15.8 MB  |
| subject10_session02_dvs.npy   | md5:d0cb00275f0d16e844c9fb6af7685018 | 57.0 MB  |
| subject10_session02_emg.npy   | md5:90517b3013d8410e2461b7bcea4c0ece | 810.3 kB |
| subject10_session03_ann.npy   | md5:5d82018828a802df886e2bf0a2862f6d | 506.6 kB |
| subject10_session03_davis.mat | md5:d0b8fc7aca971bce7101faca94215e2a | 135.8 MB |
| subject10_session03_davis.npz | md5:b56b518a8614183dcd3dbd136cc0d899 | 613.9 MB |
| subject10_session03_dvs.aedat | md5:1d60d6697059a79d12d78afa22a37657 | 15.4 MB  |
| subject10_session03_dvs.npy   | md5:c768552e8aa5731f1b4eef99556a77a5 | 58.2 MB  |
| subject10_session03_emg.npy   | md5:4c18646b291bf8e835f8e4cd53831a1f | 810.5 kB |
