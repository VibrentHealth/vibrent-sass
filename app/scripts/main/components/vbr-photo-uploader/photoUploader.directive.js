/**
 * Created by moustafabaiou on 5/22/17.
 */
(function () {
    'use strict';

    angular.module('vbr-style-guide')
        .directive('vbrPhotoUploader',

            function (TEMPLATES) {
                var directive = {
                    bindToController: true,
                    controller: PhotoUploaderCtrl,
                    controllerAs: 'vm',
                    link: link,
                    restrict: 'E',
                    scope: {
                        form: '=',
                        ngModel: '=',
                        ngChange: '&?',
                        ngRequired: '=?',
                        maxFileSize: '=?',
                        validations: '=?',
                        inputId: '@?id',
                        name: '=?',
                        ngDisabled: '=?',
                        label: '@?',
                        default: '=?defaultImageUrl'
                    },
                    templateUrl: TEMPLATES + '/vbr-photo-uploader/photoUploader.html'
                };
                return directive;

                function link(scope, element, attrs) {

                }
            });

    PhotoUploaderCtrl.$inject = [];

    /* @ngInject */
    function PhotoUploaderCtrl() {
        var vm = this;

        vm.default = vm.default ? vm.default : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABxCAYAAADifkzQAAAACXBIWXMAAAsSAAALEgHS3X78AAAJ/UlEQVR42u2d3VIaWxbHF03TSKdbQE5EUAHLDHKsM3Myap3b8AA69/EBnAuKoip5AR9gckFRXMQHMA9gHgDvpk5FKpnUcSKJE/OlR45GtEmj/QHngs2EGFBoutm7sf9VVMoqtbf9y1p7rb3X3stWq9VgEJXOZBkAcDa+TiUTAgyobGaEiACx6MOgjxP926kaUMsAoABAxaygTQExncmyAOABAA6Bsxv4uAoAiAhyKZVMqBZE7eA8CJzHYGidQD1CQCUL4vXgeADwEQDuKqCHpFkoERDTmawPAIJdzmk4pQJACQD2SbBObBDTmawdAPwAMEqo1XWqEgAUcQZFWCCmM9lRZHlmhtcK5gccltlXiChYmTSR29SiInKz6kBBRHndJApYboJUANhLJROlgYCIgpbJAXOd3bjYPaOt0jCIKHCJ3CDrw2aVhkBEKyzTAz73dT1XppKJD6aAiNxnxGLWUgIA7OrtXnWFmM5kJ1HeZ6m9Ksi9isRBTGeyEagvmVnqbJ4s6AWSsgBikR0Aoih2wA/RAogfJGUBND9IzXMi6QADY/4gz3EBAABJloW9d+8LgzpHaoKYzmSDABAg5Q243cN8aGIi7nINzdM0PU9RVMuxVavVA1VVC6JYyb3/+DF3enpGUjmGBADbWtKPriGSlAdG70zPe72eZYfDca/bn63VamVZlnMfPn5aO/j9cJ+U9COVTGwbChH57ihgXgd1u4f5WPQvq1rgtYL55Yu49vw/L9cJAXmcSib2DIGI1kJnAMCF8y+MhEPR8WBgzWazcXr+XkVR8v/dKTwkxMXudrPW2k10GhxUgAAANE3PzcZij93uYZ4AiBG0facfRLSZi3U5LTDmDxoF8P/xvp2KzsZijwlJPSK6QWzaUsKqcGhy1UiAzSAX5v7+kACQPCpj0cUSsdfCRO9Mz9M0Pdev5w0NOe9H70zPEwAy2IlbpTqIRrHvSni9nuV+P3NkxPtPQtzqZK+WOEFCIq9HKqEl0ImEQ1ECQHpQUXX3EFEwgz1S89++je1Fjni9cUJyx4BWS5wkYfQcx2GbmxjGsUAIRP4qa6TaWKEPrPoY6Gcw1Ys1trNEP1giTW2tkWphhTxgXpmx1J01trJEa5MXqVarlQm0RuZKiGh1hiiI1WoV24tUFGWLwP9b/usskTgrFEVxB9ezZVnZIRCi7zqIP5A02kg4FPX5fNjWMYeGnEtzd39eIQyiHeXw30NEvpaogGbE643b7RS2ZJ+iqADLulYItEZPO0u86Qdf2s3JBxbEHnR+fo69Qk1VVRKr5OzNZY5UU1TKkzZSRVGwl0pcXEhbhDoJz2VL5EkcZeHN7hbuXO2wWMwRCpG7DJEldKBwdiY8wpdiyJsElTN+l/hfhsiRCvHlb9sbolhZw+DK868Kr1dJDroa8yLxlggAkH/+Yk2W5c1+PU+SpKf//vXZCmEV4m1dKoXyQ+IvReinVUiSXABzyNmwRKcZRnt6eiYoipLvx7NKp6fPTALR1YBomm0nSZINf7m1Wq1M+AmqlpZImwXi55MTw8P9iwtpA8wjxnSWuPfufcHoZbBP+/tPTAQR0pmsnQKT3fR0fn5hmKUoipInOC9sJ5Yy2YBh9+1bwyzl8+eTx2BCmQ7i6emZcH5+oTtISZKeFt7sbpkVIm22Qb/e3V3Tc021VquVd16/eQQmlakCm2ZrPDkp6Zb8n50Jj0ywOjM47rSh7Vc7OUmSnurhRl/+tr0BJhYF9bvGTKlfn+VXe11TLf5xtA4mFwX17izm/QMoe09XsRB0aObmuVOA+hHwXgupCDo0c1Mhji32+jtomp4j5LKFniBKZhz43b/9dVmvcsLZWOwxIQdKtUikzQQxEg5FPW73Asu67re7+kuL7HYqOjEeXPeP3t4UxUpOKJd3zLKTkUomVNoMgc1sbCY+PMwvG31e0OFw3HO7Hffc7mGYGA+Coij58/OL3GGxmCN0TVUCqK/WEJliBMb8wcDY2OLQkHNJT6vrdr7kOHqO46YeRMLhQqVSeUoY0IsGRJE0q+N5bgnHZQvXuVyOu/WA46YehCYnNgWhvLH9aieHeVgVAHS3WzqTvQsYt6Qi4VD0B59vyelklvpx4ZBeqlarB6JYefL23bsNTMt2e6lk4rix+C1CnwuIG+AYxhHH5S57X2igAhx368FPsz+uyLKcK/5xtN7ngKjScKcA9b66hkN0u4f56amp+zjnOSNks9k4hmEWJ8aDi2P+0fzvh8V/9QNm46biBkQBDL5JeO7uzysu19Cymdyl1mBoYjy4PuL1ruWfvzCy6Fn4ZsXG6AaOvyzMrbKsa2XQATaLZV0rvyzMrRr4iPI3EC+T1RsgwzCLcAPFMMyigSeNS60g6t5VbDY2E7+pAJstMjDmD+qd5Dff3G8oRI/H/RAswXgweN+o+fAbiKgXrm6rN5FwKDpIEWhvbtURN8qVXrZEAIAjvZ4yCJuteuaTOrvSKyEeW6+ceH3HiLqUPKoWSOJ1dCVEyxqJVwnFLldDRIm/YL0vIlVsOee2+eYD630RJ6HdylpLiJY1Eqm2hkVp+SFL5FjhlRAtazSHFV5niQAAe9b7w58XXrfLdCVEFM4WrfeITSoAfLjumzqpAN8HDbWp+ecv1nb/9/YfepxcMrMURcl//LSvtU3SfiftaTtqgolu6NdcIe12D/NT4fCS3kW/JEuW5c2Tk9J6D6ePhVQy0VGJRzedTCdBh+Zf0TvT8x6Pe8nhcMQHbae/Wq0eSJKc+7S//6TH2lQVAF522iS6257Cs6DjyeLZ2Eyc427Fr+rITboaDabL5S85HetQu2pH2+15/TcAMAs61aiiPzoH8PWchdPJzNM0PU+ylSqKkpck+dnnk5OcAVVtxW4Adm2JesyPnSoSDkV5jptxOp1RmrbP4OrbpKrVgqoqBUmSC6Io7hh8w0bH82BPEBFIH2BoURsY8wd5jguwLDtDURTncNAzNpuNB9DenKtx6V+tVhMafTDK5fKWJMsChkLgnU7nwZ4hIpARsFoS6ZkPbrfaZupEmk8Kp5KJPbD2HvUCWNAKsCeIFkhdAfZ0Mq3nM/sWSLwAdYFogcQLsKfApk2wMwqE9CImWJqj0L5ARCA9KP2wW7y+UwnqB0NVPX+p7hARSBaBtNraftVBKpkw5Ky/IRARSDtyrTc9l5SQ9RlWJWEYRMu9Guc++w7xhlql4dbXd4hNMHkEc1DnShXq5SyHRlsfNohNMH0AEATU12FAdAz1coq+X7OGBeKAwcQGjwiIl2D6gNBmnG3c5jFym9gvOCQCYhNMBgD8CCiJ0WwJ6ieTiFpiJApii9SEh3rvXAY3OKjvuhN5rSixEC8BZaHe8JGHesNOI6EKUF/fFLqtdbEgdp93sihVoeFrO122Qzdcgfo9rxL6iHDpWhEz6U9Ki07Zt0KMiwAAAABJRU5ErkJggg==';

        vm.name = vm.name || vm.inputId;

        vm.maxFileSize = vm.maxFileSize || '5MB';

        vm.ngChangeWrapper = function () {
            //do other things
            return vm.ngChange();
        };

        vm.shouldShowErrors = function () {
            return vm.form.$invalid && vm.form[vm.inputId].$invalid && (vm.form[vm.inputId].$dirty || vm.form.$submitted);
        };

        if(vm.validations){
            angular.forEach(vm.validations, function (error, key) {
                if(typeof (error.message) == 'string' && error.message.length > 0){
                    vm.validations[key].key = key;
                }
            })
        }
    }

})();

