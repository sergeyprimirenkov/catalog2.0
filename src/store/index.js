import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    games: [],
    wishlistIds: [],
    backgrounds: [],
    search: ""
  },
  plugins: [createPersistedState()],
  getters: {
    showGenres: state => selectedPlatform => {
      var filteredGames = state.games.filter(game => {
        return game.category == selectedPlatform;
      });
      var result = filteredGames.reduce((arr, { genre }) => {
        if (!arr.includes(genre)) {
          arr.push(genre);
        }
        return arr;
      }, []);
      return result;
    },
    // showGames: state => (
    //   query,
    //   platform,
    //   genre,
    //   isChild,
    //   isVeryChild,
    //   isLocalMultiplayer,
    //   selectedSort
    // ) => {
    //   if (genre === "все" && isChild) {
    //
    //     var tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isChild &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (genre === "все" && isVeryChild) {
    //
    //     var tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isVeryChild &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (genre === "все") {
    //
    //     var tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (isChild) {
    //
    //     var tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isChild &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (isVeryChild) {
    //
    //     var tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isVeryChild &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   } else if (genre === "все" && isChild && isLocalMultiplayer) {
    //     return state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         isChild &&
    //         game.isLocalMultiplayer &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //   } else if (genre === "все" && isLocalMultiplayer) {
    //     return state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.isLocalMultiplayer &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //   } else if (isChild && isLocalMultiplayer) {
    //     return state.games.filter(game => {
    //       return (
    //         game.category === "ps5" &&
    //         isChild &&
    //         game.isLocalMultiplayer &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //   } else if (isLocalMultiplayer) {
    //     return state.games.filter(game => {
    //       return (
    //         game.category === "ps5" &&
    //         game.isLocalMultiplayer &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //   } else {
    //
    //     var tmpArray = state.games.filter(game => {
    //       return (
    //         game.category === platform &&
    //         game.genre === genre &&
    //         game.title.toLowerCase().includes(query)
    //       );
    //     });
    //     if (selectedSort == "ascending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         a.title.localeCompare(b.title)
    //       );
    //     } else if (selectedSort == "descending") {
    //       filteredGames = tmpArray.sort((a, b) =>
    //         b.title.localeCompare(a.title)
    //       );
    //     } else {
    //       filteredGames = tmpArray;
    //     }
    //     return filteredGames;
    //   }
    // },
    showHTCGames: state => (
      query,
      genre,
      isChild,
      isVeryChild,
      selectedSort
    ) => {
      if (genre === "все" && isChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "htc" &&
              game.isChild &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "htc" &&
              game.isChild &&
              game.genre.includes(query)) ||
            (game.category === "htc" &&
              game.isChild &&
              game.tag.includes(query))
          );
        });
      } else if (genre === "все" && isVeryChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "htc" &&
              game.isVeryChild &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "htc" &&
              game.isVeryChild &&
              game.genre.includes(query)) ||
            (game.category === "htc" &&
              game.isVeryChild &&
              game.tag.includes(query))
          );
        });
      } else if (genre === "все") {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "htc" &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "htc" && game.genre.includes(query)) ||
            (game.category === "htc" && game.tag.includes(query))
          );
        });
      } else if (isChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "htc" &&
              game.isChild &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "htc" &&
              game.isChild &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "htc" &&
              game.isChild &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      } else if (isVeryChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "htc" &&
              game.isVeryChild &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "htc" &&
              game.isVeryChild &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "htc" &&
              game.isVeryChild &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      } else {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "htc" &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "htc" &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "htc" &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      }
      var filteredGames = [];
      if (selectedSort == "ascending") {
        filteredGames = tmpArray.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort == "descending") {
        filteredGames = tmpArray.sort((a, b) => b.title.localeCompare(a.title));
      } else if (selectedSort == "bygenre") {
        filteredGames = tmpArray.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (selectedSort == "bytag") {
        filteredGames = tmpArray.sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        filteredGames = tmpArray;
      }
      return filteredGames;
    },
    showPSVRGames: state => (
      query,
      genre,
      isChild,
      isVeryChild,
      selectedSort
    ) => {
      if (genre === "все" && isChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "psvr" &&
              game.isChild &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "psvr" &&
              game.isChild &&
              game.genre.includes(query)) ||
            (game.category === "psvr" &&
              game.isChild &&
              game.tag.includes(query))
          );
        });
      } else if (genre === "все" && isVeryChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "psvr" &&
              game.isVeryChild &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "psvr" &&
              game.isVeryChild &&
              game.genre.includes(query)) ||
            (game.category === "psvr" &&
              game.isVeryChild &&
              game.tag.includes(query))
          );
        });
      } else if (genre === "все") {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "psvr" &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "psvr" && game.genre.includes(query)) ||
            (game.category === "psvr" && game.tag.includes(query))
          );
        });
      } else if (isChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "psvr" &&
              game.isChild &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "psvr" &&
              game.isChild &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "psvr" &&
              game.isChild &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      } else if (isVeryChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "psvr" &&
              game.isVeryChild &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "psvr" &&
              game.isVeryChild &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "psvr" &&
              game.isVeryChild &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      } else {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "psvr" &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "psvr" &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "psvr" &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      }
      var filteredGames = [];
      if (selectedSort == "ascending") {
        filteredGames = tmpArray.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort == "descending") {
        filteredGames = tmpArray.sort((a, b) => b.title.localeCompare(a.title));
      } else if (selectedSort == "bygenre") {
        filteredGames = tmpArray.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (selectedSort == "bytag") {
        filteredGames = tmpArray.sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        filteredGames = tmpArray;
      }
      return filteredGames;
    },
    showPS5Games: state => (
      query,
      genre,
      isChild,
      isLocalMultiplayer,
      selectedSort
    ) => {
      if (genre == "все" && isChild && isLocalMultiplayer) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category == "ps5" &&
              isChild &&
              game.isLocalMultiplayer &&
              game.title.toLowerCase().includes(query)) ||
            (game.category == "ps5" &&
              isChild &&
              game.isLocalMultiplayer &&
              game.genre.includes(query)) ||
            (game.category == "ps5" &&
              isChild &&
              game.isLocalMultiplayer &&
              game.tag.includes(query))
          );
        });
      } else if (isChild && isLocalMultiplayer) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "ps5" &&
              isChild &&
              game.isLocalMultiplayer &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "ps5" &&
              isChild &&
              game.isLocalMultiplayer &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "ps5" &&
              isChild &&
              game.isLocalMultiplayer &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      } else if (genre === "все" && isChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "ps5" &&
              game.isChild &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "ps5" &&
              game.isChild &&
              game.genre.includes(query)) ||
            (game.category === "ps5" &&
              game.isChild &&
              game.tag.includes(query))
          );
        });
      } else if (isChild) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "ps5" &&
              game.isChild &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "ps5" &&
              game.isChild &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "ps5" &&
              game.isChild &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      } else if (genre === "все" && isLocalMultiplayer) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "ps5" &&
              game.isLocalMultiplayer &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "ps5" &&
              game.isLocalMultiplayer &&
              game.genre.includes(query)) ||
            (game.category === "ps5" &&
              game.isLocalMultiplayer &&
              game.tag.includes(query))
          );
        });
      } else if (isLocalMultiplayer) {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "ps5" &&
              game.isLocalMultiplayer &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "ps5" &&
              game.isLocalMultiplayer &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "ps5" &&
              game.isLocalMultiplayer &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      } else if (genre === "все") {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "ps5" &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "ps5" && game.genre.includes(query)) ||
            (game.category === "ps5" && game.tag.includes(query))
          );
        });
      } else {
        var tmpArray = state.games.filter(game => {
          return (
            (game.category === "ps5" &&
              game.genre === genre &&
              game.title.toLowerCase().includes(query)) ||
            (game.category === "ps5" &&
              game.genre === genre &&
              game.genre.includes(query)) ||
            (game.category === "ps5" &&
              game.genre === genre &&
              game.tag.includes(query))
          );
        });
      }
      var filteredGames = [];
      if (selectedSort == "ascending") {
        filteredGames = tmpArray.sort((a, b) => a.title.localeCompare(b.title));
      } else if (selectedSort == "descending") {
        filteredGames = tmpArray.sort((a, b) => b.title.localeCompare(a.title));
      } else if (selectedSort == "bygenre") {
        filteredGames = tmpArray.sort((a, b) => a.genre.localeCompare(b.genre));
      } else if (selectedSort == "bytag") {
        filteredGames = tmpArray.sort((a, b) => a.tag.localeCompare(b.tag));
      } else {
        filteredGames = tmpArray;
      }
      return filteredGames;
    },
    showLikedGames: state => query => {
      return state.wishlist.filter(game => {
        return game.title.toLowerCase().includes(query);
      });
    },
    wishlist: state => query => {
      return state.games.filter(game => {
        return (
          (state.wishlistIds.includes(game.id) &&
            game.title.toLowerCase().includes(query)) ||
          (state.wishlistIds.includes(game.id) &&
            game.genre.includes(query)) ||
          (state.wishlistIds.includes(game.id) &&
            game.tag.includes(query))
        );
      });
    },
    showSimilarGamesByPlatform: state => (id, category, tag) => {
      return state.games.filter(game => {
        return (
          game.id !== id &&
          game.category === category &&
          game.tag == tag &&
          game.tag !== undefined
        );
      });
    },
    getGameById: state => id => {
      return state.games.find(game => {
        return game.id === id;
      });
    },
    showBackgrounds: state => theme => {
      if (theme === "все") {
        return state.backgrounds;
      } else {
        return state.backgrounds.filter(back => {
          return back.theme === theme;
        });
      }
    }
  },
  actions: {
    loadGames({ commit }) {
      axios
        .get("games.json")
        .then(r => r.data.games)
        .then(games => {
          commit("SET_GAMES", games);
        });
    },
    loadBackgrounds({ commit }) {
      axios
        .get("backgrounds.json")
        .then(r => r.data.backgrounds)
        .then(backgrounds => {
          commit("SET_BACKGROUNDS", backgrounds);
        });
    }
  },
  mutations: {
    SET_GAMES(state, games) {
      state.games = games;
    },
    SET_BACKGROUNDS(state, backgrounds) {
      state.backgrounds = backgrounds;
    },
    addGame(state, gameId) {
      if (!state.wishlistIds.includes(gameId)) {
        state.wishlistIds.push(gameId);
      }
    },
    removeGame(state, gameId) {
      var index = state.wishlistIds.indexOf(gameId);
      if (index !== -1) {
        state.wishlistIds.splice(index, 1);
      }
    }
  }
});
